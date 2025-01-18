import React, { useState } from "react";

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    textAlign: "center" as const,
    color: "#333",
    marginBottom: "20px",
    fontWeight: "bold",
    fontSize: "28px",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "16px",
    color: "#555",
    marginBottom: "10px",
  },
  sliderInputWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  slider: {
    flex: 1,
    appearance: "none" as const,
    height: "5px",
    backgroundColor: "#ddd",
    borderRadius: "5px",
    outline: "none",
    transition: "background 0.3s ease",
  },
  numberInput: {
    width: "100px",
    padding: "5px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    textAlign: "center" as const,
  },
  valueDisplay: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  resultSection: {
    textAlign: "center" as const,
    marginTop: "20px",
  },
};

const EligibilityCalculator: React.FC = () => {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(50000);
  const [existingEMIs, setExistingEMIs] = useState<number>(5000);
  const [loanTenure, setLoanTenure] = useState<number>(15);
  const [interestRate, setInterestRate] = useState<number>(8.0);

  const handleSliderChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const value = parseFloat(e.target.value);
    if (type === "monthlyIncome") {
      setMonthlyIncome(value);
    } else if (type === "existingEMIs") {
      setExistingEMIs(value);
    } else if (type === "loanTenure") {
      setLoanTenure(value);
    } else if (type === "interestRate") {
      setInterestRate(value);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const value = parseFloat(e.target.value) || 0;
    if (type === "monthlyIncome") {
      setMonthlyIncome(value);
    } else if (type === "existingEMIs") {
      setExistingEMIs(value);
    } else if (type === "loanTenure") {
      setLoanTenure(value);
    } else if (type === "interestRate") {
      setInterestRate(value);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Home Loan Eligibility Calculator</h1>

      {[
        {
          label: "Monthly Income (₹):",
          min: 10000,
          max: 1000000,
          step: 1000,
          value: monthlyIncome,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            handleSliderChange(e, "monthlyIncome"),
          onInputChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, "monthlyIncome"),
        },
        {
          label: "Existing EMIs (₹):",
          min: 0,
          max: 500000,
          step: 1000,
          value: existingEMIs,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            handleSliderChange(e, "existingEMIs"),
          onInputChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, "existingEMIs"),
        },
        {
          label: "Loan Tenure (Years):",
          min: 5,
          max: 30,
          step: 1,
          value: loanTenure,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            handleSliderChange(e, "loanTenure"),
          onInputChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, "loanTenure"),
        },
        {
          label: "Interest Rate (%):",
          min: 5,
          max: 20,
          step: 0.1,
          value: interestRate,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            handleSliderChange(e, "interestRate"),
          onInputChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e, "interestRate"),
        },
      ].map(({ label, min, max, step, value, onChange, onInputChange }, idx) => (
        <div style={styles.inputGroup} key={idx}>
          <label style={styles.label}>{label}</label>
          <div style={styles.sliderInputWrapper}>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={onChange}
              style={styles.slider}
            />
            <input
              type="number"
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={onInputChange}
              style={styles.numberInput}
            />
          </div>
        </div>
      ))}

      <div style={styles.resultSection}>
        <h2>Eligibility Result</h2>
        <p>
          Based on your monthly income of ₹{monthlyIncome.toLocaleString()},
          existing EMIs of ₹{existingEMIs.toLocaleString()}, loan tenure of{" "}
          {loanTenure} years, and an interest rate of {interestRate.toFixed(1)}
          %, your eligible loan amount is:
        </p>
        <p style={styles.valueDisplay}>
          ₹
          {(
            (monthlyIncome - existingEMIs) *
            0.4 *
            loanTenure
          ).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default EligibilityCalculator;
