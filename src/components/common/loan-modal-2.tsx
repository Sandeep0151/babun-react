
// internal

import PropertyForm from "../forms/loan-form-2";

const LoanModal2 = () => {
  return (
    <div
      className="modal fade"
      id="loanModal2"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen modal-dialog-centered">
        <div className="container">
          <div className="user-data-form modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"

            ></button>
            <div className="form-wrapper m-auto">

              <div className="tab-content mt-30">
                <div className="tab-pane show active" role="tabpanel" id="fc1">
                  <div className="text-center mb-20">
                    <h2>Hi, Welcome Back!</h2>
                    <p>
                      Still do not have an account? <a href="#">Sign up</a>
                    </p>
                  </div>
                  {/* login form start */}
                  <PropertyForm />
                  {/* login form end */}
                </div>
                <div className="tab-pane" role="tabpanel" id="fc2">
                  <div className="text-center mb-20">
                    <h2>Register</h2>
                    <p>
                      Already have an account? <a href="#">Login</a>
                    </p>
                  </div>
                  {/* register form start */}

                  {/* register form end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanModal2;
