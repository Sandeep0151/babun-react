import { useState, useEffect } from 'react';
import axios from 'axios';
import fetchCsrfToken from '../../utils/getCsrfToken'; // Adjust the path as needed

const LoanModal = () => {
    const [csrfToken, setCsrfToken] = useState('');
    const [formData, setFormData] = useState({
        required_amount: '',
        need_time: '',
        bank_type: '',
        name: '',
        mobile: '',
    });

    useEffect(() => {
        const getCsrf = async () => {
            const token = await fetchCsrfToken();
            setCsrfToken(token);
        };
        getCsrf();
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                'http://54.158.143.81/api/loan-application/',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken,
                    },
                }
            );
            if (response.status === 201) {
                alert('Loan application submitted successfully!');
                setFormData({
                    required_amount: '',
                    need_time: '',
                    bank_type: '',
                    name: '',
                    mobile: '',
                });
            }
        } catch (error) {
            console.error('Failed to submit the application:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="modal fade" id="loanModal" tabIndex={-1} aria-labelledby="loanModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="loanModalLabel">Apply for Home Loan</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="requiredAmount" className="form-label">Required Amount</label>
                                <input
                                    type="number"
                                    name="required_amount"
                                    className="form-control"
                                    id="requiredAmount"
                                    value={formData.required_amount}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="needTime" className="form-label">Time Needed</label>
                                <input
                                className="form-control"
                        type="text"
                        name="need_time"
                        value={formData.need_time}
                        onChange={handleInputChange}
                        required
                    />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="bankType" className="form-label">Bank Type</label>
                                <input
                        type="text"
                        className="form-control"
                        name="bank_type"
                        value={formData.bank_type}
                        onChange={handleInputChange}
                        required
                    />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">Mobile Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                        onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanModal;
