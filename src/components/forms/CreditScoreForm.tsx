import React, { useState, useEffect } from "react";
import axios from 'axios';
import fetchCsrfToken from '../../utils/getCsrfToken'; // Adjust the path as needed
import styles from "./CreditScoreForm.module.css";

const CreditScoreForm: React.FC = () => {
  const [csrfToken, setCsrfToken] = useState('');
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    mobile: "",
    email: "",
    pan: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
        const getCsrf = async () => {
            const token = await fetchCsrfToken();
            setCsrfToken(token);
        };
        getCsrf();
    }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {

      await axios.post(
        'http://54.158.143.81/api/credit-score/',
        {
          name: formData.fullName,
          dob: formData.dob,
          mobile: formData.mobile,
          email: formData.email,
          pan: formData.pan,
        },
        {
          headers: { 'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken, },
        }
      );
      setMessage("Your credit score request was successfully submitted!");
      setFormData({
                    fullName: '',
                    dob: '',
                    mobile: '',
                    email: '',
                    pan: '',
                });
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h4 className="text-white">Get Your Credit Score & Report for Free, Forever!</h4>
        <ul className="text-white">
          <li>✅ Instant Results</li>
          <li>✅ No Hidden Fees</li>
          <li>✅ Secure & Confidential</li>
          <li>✅ No Impact on Your Credit Report</li>
        </ul>
      </div>

      <div className={styles.rightSection}>
        <h3>Get your Credit Score Report</h3>
        <p>
          5 Lac+ people have got their Credit Scores for{" "}
          <span className={styles.highlight}>FREE!</span>
        </p>
        {message && <p>{message}</p>}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="dob">Date of Birth *</label>
              <input value={formData.dob} onChange={handleChange} type="date" id="dob" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="mobile">Mobile No. *</label>
              <input
                type="tel"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                required
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="pan">PAN Card *</label>
              <input
                type="text"
                id="pan"
                value={formData.pan}
                onChange={handleChange}
                placeholder="Enter your PAN card number"
                required
              />
            </div>
          </div>
          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="/terms" target="_blank">Terms and Conditions</a>.
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>
            Check Credit Score
          </button>
        </form>

      </div>
    </div>
  );
};

export default CreditScoreForm;
