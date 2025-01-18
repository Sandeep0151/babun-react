import React, { useState } from "react";

interface LoanApplicationModalProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const LoanApplicationModal: React.FC<LoanApplicationModalProps> = ({ onClose, onSubmit }) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Pass the form data to the parent component
    onClose(); // Close the modal
  };

  return (
    <div className="modal show d-block" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Apply for a Loan</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label>Required Amount</label>
                <input
                  type="text"
                  name="required_amount"
                  className="form-control"
                  value={formData.required_amount}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Need Time</label>
                <input
                  type="text"
                  name="need_time"
                  className="form-control"
                  value={formData.need_time}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Bank Type</label>
                <select
                  name="bank_type"
                  className="form-control"
                  value={formData.bank_type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Private">Private</option>
                  <option value="Nationalized">Nationalized</option>
                  <option value="NBFC">NBFC</option>
                </select>
              </div>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  className="form-control"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationModal;
