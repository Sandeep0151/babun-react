import React, { useState } from "react";

// Type definitions for the state variables
interface EmiResults {
  [key: number]: number; // This type ensures that the object keys are numbers (10, 15, 20)
}

const EMICalculatorTwo: React.FC = () => {
  // State Variables
  const [loanAmount, setLoanAmount] = useState<number>(5000000);
  const [interestRate, setInterestRate] = useState<number>(10);
  const [emiResults, setEmiResults] = useState<EmiResults>({
    10: 66075,
    15: 53730,
    20: 48251,
  });

  // Update Loan Amount
  const handleLoanAmountChange = (value: number): void => {
    if (value >= 100000 && value <= 10000000) {
      setLoanAmount(value);
    }
  };

  // Update Interest Rate
  const handleInterestRateChange = (value: number): void => {
    if (value >= 1 && value <= 30) {
      setInterestRate(value);
    }
  };

  // EMI Calculation Formula
  const calculateForTenure = (loanAmount: number, interestRate: number, tenureYears: number): number => {
    const monthlyRate = interestRate / (12 * 100); // Convert annual rate to monthly
    const tenureMonths = tenureYears * 12; // Convert years to months
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    return Math.round(emi); // Round off to the nearest integer
  };

  // Calculate EMI
  const calculateEMI = (): void => {
    const results: EmiResults = {
      10: calculateForTenure(loanAmount, interestRate, 10),
      15: calculateForTenure(loanAmount, interestRate, 15),
      20: calculateForTenure(loanAmount, interestRate, 20),
    };
    setEmiResults(results);
  };

  return (
    <div
      className="container"
      style={{
        width: "90%",
        maxWidth: "600px",
        background: "#fff",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#333", fontSize: "24px", marginBottom: "10px" }}>
        Calculate Your Home Loan EMI
      </h1>
      <p style={{ color: "#666", fontSize: "14px", marginBottom: "20px" }}>
        Get a Home Loan quote immediately
      </p>

      {/* Loan Amount Slider and Input */}
      <div className="slider-container" style={{ margin: "20px 0", textAlign: "left" }}>
        <label
          className="slider-label"
          style={{ fontSize: "16px", marginBottom: "5px", display: "block", color: "#333" }}
        >
          Loan Amount (₹):
        </label>
        <input
          type="number"
          value={loanAmount}
          min="100000"
          max="10000000"
          step="50000"
          onChange={(e) => handleLoanAmountChange(Number(e.target.value))}
          style={{
            width: "100%",
            padding: "5px",
            marginBottom: "10px",
            fontSize: "16px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <input
          type="range"
          min="100000"
          max="10000000"
          step="50000"
          value={loanAmount}
          className="slider"
          style={{ width: "100%" }}
          onChange={(e) => handleLoanAmountChange(Number(e.target.value))}
        />
      </div>

      {/* Interest Rate Slider and Input */}
      <div className="slider-container" style={{ margin: "20px 0", textAlign: "left" }}>
        <label
          className="slider-label"
          style={{ fontSize: "16px", marginBottom: "5px", display: "block", color: "#333" }}
        >
          Interest Rate (%):
        </label>
        <input
          type="number"
          value={interestRate}
          min="1"
          max="30"
          step="0.1"
          onChange={(e) => handleInterestRateChange(Number(e.target.value))}
          style={{
            width: "100%",
            padding: "5px",
            marginBottom: "10px",
            fontSize: "16px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
        <input
          type="range"
          min="1"
          max="30"
          step="0.1"
          value={interestRate}
          className="slider"
          style={{ width: "100%" }}
          onChange={(e) => handleInterestRateChange(Number(e.target.value))}
        />
      </div>

      {/* Calculate Button */}
      <button
        className="btn"
        style={{
          background: "#ff3366",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px",
        }}
        onClick={calculateEMI}
      >
        Calculate
      </button>

      {/* Results */}
      <div className="results" style={{ marginTop: "20px" }}>
        {Object.keys(emiResults).map((tenure) => (
          <div
            key={tenure}
            className="result-card"
            style={{
              background: "#f9f9f9",
              padding: "15px",
              margin: "10px 0",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <strong>EMI for {tenure} Years:</strong> {emiResults[parseInt(tenure)].toLocaleString()} ₹
          </div>
        ))}
      </div>
    </div>
  );
};

export default EMICalculatorTwo;
