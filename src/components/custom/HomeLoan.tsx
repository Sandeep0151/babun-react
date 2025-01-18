import React from "react";
import LoanModal from '../../components/common/loan-modal';
import LoanModal2 from '../../components/common/loan-modal-2'


const HomeLoan: React.FC = () => {


return (
      <div className="container mt-5 pt-200">
      <h3 className="text-center mb-4">Home Loan Page.</h3>
      <div className="text-center">

      <a href="#" data-bs-toggle="modal" data-bs-target="#loanModal" className="fw-500 btn btn-info">Apply Now</a>
      <a href="#" data-bs-toggle="modal" data-bs-target="#loanModal2" className="fw-500 btn btn-info">Apply Now</a>
      </div>
      <LoanModal/>
      <LoanModal2/>
      </div>

);
};

export default HomeLoan;