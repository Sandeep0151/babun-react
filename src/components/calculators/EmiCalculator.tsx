import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const EmiCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(10);
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const calculateEMI = () => {
    const monthlyInterestRate = interestRate / (12 * 100);
    const numberOfMonths = loanTenure * 12;

    const emi =
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    const totalPayment = emi * numberOfMonths;
    const totalInterest = totalPayment - loanAmount;

    setMonthlyEMI(Number(emi.toFixed(2)));
    setTotalInterest(Number(totalInterest.toFixed(2)));
    setTotalPayment(Number(totalPayment.toFixed(2)));

    updateChart(loanAmount, totalInterest);
  };

  const updateChart = (principal: number, interest: number) => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.data.datasets[0].data = [principal, interest];
      chartInstanceRef.current.update();
    } else if (chartRef.current) {
      chartInstanceRef.current = new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: ["Principal Amount", "Total Interest"],
          datasets: [
            {
              data: [principal, interest],
              backgroundColor: ["#4caf50", "#ff5722"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
          },
        },
      });
    }
  };

  useEffect(() => {
    calculateEMI();
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">EMI Calculator</h1>
      <div className="row">
        <div className="card shadow p-4 col-lg-6 col-md-12">
          <div className="mb-3">
            <label>
              Loan Amount: ₹
              <input
                type="number"
                className="form-control d-inline-block ms-2"
                style={{ width: "150px" }}
                value={loanAmount}
                min={100000}
                max={100000000}
                step={50000}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
            </label>
            <input
              type="range"
              className="form-range"
              min={100000}
              max={100000000}
              step={50000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <label>
              Interest Rate (%):
              <input
                type="number"
                className="form-control d-inline-block ms-2"
                style={{ width: "100px" }}
                value={interestRate}
                min={1}
                max={30}
                step={0.1}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
            </label>
            <input
              type="range"
              className="form-range"
              min={1}
              max={30}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <label>
              Tenure (Years):
              <input
                type="number"
                className="form-control d-inline-block ms-2"
                style={{ width: "100px" }}
                value={loanTenure}
                min={1}
                max={30}
                step={1}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
              />
            </label>
            <input
              type="range"
              className="form-range"
              min={1}
              max={30}
              step={1}
              value={loanTenure}
              onChange={(e) => setLoanTenure(Number(e.target.value))}
            />
          </div>
          <div className="mt-4">
            <h3>EMI Details:</h3>
            <p>
              <strong>Monthly EMI:</strong> ₹{monthlyEMI}
            </p>
            <p>
              <strong>Total Interest:</strong> ₹{totalInterest}
            </p>
            <p>
              <strong>Total Payment:</strong> ₹{totalPayment}
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
          <div className="chart-container" style={{ width: "100%", height: "300px" }}>
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;
