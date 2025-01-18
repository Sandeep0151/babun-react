import React, { useState } from "react";
import axios from "axios";

interface LoanFormProps {
  onSubmit: (data: any) => void;
}

const LoanForm: React.FC<LoanFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    required_amount: "",
    need_time: "",
    bank_type: "",
    name: "",
    mobile: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://54.158.143.81/api/loan-application/", formData);
      alert(response.data.message);
      onSubmit(formData);
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="loan-form">
      <div className="form-group">
        <label htmlFor="required_amount">Required Amount</label>
        <input
          type="text"
          id="required_amount"
          name="required_amount"
          className="form-control"
          placeholder="Enter required amount"
          value={formData.required_amount}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="need_time">Need Time</label>
        <input
          type="text"
          id="need_time"
          name="need_time"
          className="form-control"
          placeholder="Enter need time"
          value={formData.need_time}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="bank_type">Bank Type</label>
        <select
          id="bank_type"
          name="bank_type"
          className="form-control"
          value={formData.bank_type}
          onChange={handleChange}
          required
        >
          <option value="">Select bank type</option>
          <option value="Private">Private</option>
          <option value="Nationalized">Nationalized</option>
          <option value="NBFC">NBFC</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          className="form-control"
          placeholder="Enter your mobile number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default LoanForm;
