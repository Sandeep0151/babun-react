import React, { useState, useEffect } from "react";

interface Results {
  originalEMI: string;
  revisedEMI: string | number;
  reducedTenure: string;
  totalSavings: string | number;
  currentTenure: string;
  newTenure: string;
  monthsEarly: string;
}

const PartPaymentCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(6);
  const [loanTenure, setLoanTenure] = useState<number>(1);
  const [prePayment, setPrePayment] = useState<number>(10000);
  const [calculationType, setCalculationType] = useState<"decrease_emi" | "keep_same_emi">("decrease_emi");
  const [results, setResults] = useState<Results>({
    originalEMI: "0",
    revisedEMI: 0,
    reducedTenure: "N/A",
    totalSavings: 0,
    currentTenure: "N/A",
    newTenure: "N/A",
    monthsEarly: "N/A",
  });

  const calculateEMI = (principal: number, rate: number, tenure: number): number => {
    const monthlyRate = rate / 12 / 100;
    const months = tenure * 12;
    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
    );
  };

  const calculateReducedTenure = (principal: number, rate: number, emi: number): number => {
    const monthlyRate = rate / 12 / 100;
    let months = 0;
    while (principal > 0) {
      const interest = principal * monthlyRate;
      const principalPaid = emi - interest;
      if (principalPaid <= 0) break; // Avoid infinite loop
      principal -= principalPaid;
      months++;
    }
    return months;
  };

  const updateResults = (): void => {
    const originalEMI = calculateEMI(loanAmount, interestRate, loanTenure);

    if (calculationType === "decrease_emi") {
      const newLoanAmount = loanAmount - prePayment;
      const revisedEMI = calculateEMI(newLoanAmount, interestRate, loanTenure);
      const totalSavings = (originalEMI - revisedEMI) * loanTenure * 12;

      setResults({
        originalEMI: originalEMI.toFixed(2),
        revisedEMI: revisedEMI.toFixed(2),
        reducedTenure: "N/A",
        totalSavings: totalSavings.toFixed(2),
        currentTenure: "N/A",
        newTenure: "N/A",
        monthsEarly: "N/A",
      });
    } else {
      const newLoanAmount = loanAmount - prePayment;
      const reducedTenureMonths = calculateReducedTenure(newLoanAmount, interestRate, originalEMI);
      const currentTenureMonths = loanTenure * 12;
      const monthsEarly = currentTenureMonths - reducedTenureMonths;

      setResults({
        originalEMI: originalEMI.toFixed(2),
        revisedEMI: "Same",
        reducedTenure: `${reducedTenureMonths} months`,
        totalSavings: "N/A",
        currentTenure: `${currentTenureMonths} months`,
        newTenure: `${reducedTenureMonths} months`,
        monthsEarly: `${monthsEarly} months`,
      });
    }
  };

  useEffect(() => {
    updateResults();
  }, [loanAmount, interestRate, loanTenure, prePayment, calculationType]);

  const handleSliderInput = (setter: React.Dispatch<React.SetStateAction<number>>, min: number, max: number, value: string) => {
    const numericValue = Math.max(min, Math.min(max, parseFloat(value) || 0));
    setter(numericValue);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Part Payment Calculator</h2>
      <form>
        {[
          { label: "My Outstanding Loan Amount is", value: loanAmount, min: 100000, max: 30000000, step: 10000, setter: setLoanAmount },
          { label: "My Current Interest Rate is", value: interestRate, min: 6, max: 12, step: 0.1, setter: setInterestRate },
          { label: "My Outstanding Loan Tenure is (Years)", value: loanTenure, min: 1, max: 30, step: 1, setter: setLoanTenure },
          { label: "Amount You Want to Prepay", value: prePayment, min: 10000, max: 30000000, step: 10000, setter: setPrePayment },
        ].map(({ label, value, min, max, step, setter }) => (
          <div className="slider-container mb-3" key={label}>
            <label>{label}</label>
            <div className="d-flex gap-2">
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setter(parseFloat(e.target.value))}
                className="form-range flex-grow-1"
              />
              <input
                type="number"
                value={value}
                min={min}
                max={max}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleSliderInput(setter, min, max, e.target.value)
                }
                className="form-control w-25"
              />
            </div>
          </div>
        ))}
        <div className="form-check">
          <input
            type="radio"
            id="decrease_emi"
            name="calculation_type"
            value="decrease_emi"
            className="form-check-input"
            checked={calculationType === "decrease_emi"}
            onChange={() => setCalculationType("decrease_emi")}
          />
          <label htmlFor="decrease_emi" className="form-check-label">
            Decrease EMI
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            id="keep_same_emi"
            name="calculation_type"
            value="keep_same_emi"
            className="form-check-input"
            checked={calculationType === "keep_same_emi"}
            onChange={() => setCalculationType("keep_same_emi")}
          />
          <label htmlFor="keep_same_emi" className="form-check-label">
            Keep EMI Same & Decrease Loan Tenure
          </label>
        </div>
      </form>
      <div className="result-box mt-4">
        <h4>Your Results</h4>
        <p>
          <strong>Original EMI:</strong> ₹{results.originalEMI}
        </p>
        <p>
          <strong>Revised EMI:</strong> ₹{results.revisedEMI}
        </p>
        <p>
          <strong>Reduced Loan Tenure:</strong> {results.reducedTenure}
        </p>
        <p>
          <strong>Total Savings:</strong> ₹{results.totalSavings}
        </p>
      </div>
      {calculationType === "keep_same_emi" && (
        <div className="tenure-details mt-4">
          <h4>Loan Tenure Reduction Details</h4>
          <p>
            <strong>Current Tenure:</strong> {results.currentTenure}
          </p>
          <p>
            <strong>Revised Tenure:</strong> {results.newTenure}
          </p>
          <p>
            <strong>Number of Months Early:</strong> {results.monthsEarly}
          </p>
        </div>
      )}
    </div>
  );
};

export default PartPaymentCalculator;
