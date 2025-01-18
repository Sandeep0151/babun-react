import { NavLink } from "react-router-dom";
// internal
import service_data from "../../data/service-data";


const BlockFeatureTwelve = () => {
  const service_items = service_data
    .filter((s) => s.page === "home-5")
    .slice(4, 6);
  return (
    <div className="block-feature-twelve position-relative pt-130 lg-pt-80 pb-180 lg-pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-11">
            <div className="title-one mb-40 lg-mb-20">
              <h2 className="color-deep">
                We are here to help you manage, build & protect your wealth.
              </h2>
            </div>
          </div>
        </div>
        <div className="row gx-xl-5">
          <div className="col-lg-8 d-flex mt-40 md-mt-20">
            <div className="card-style-eighteen position-relative">
              <div className="row h-100">
                <div className="col-lg-7 order-lg-last">
                  <div className="pt-45">
                    <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                      <img src="/assets/images/icon/icon_97.svg" alt="icon" className="lazy-img" />
                    </div>
                    <blockquote>
                      “Efficient, knowledgeable, & smooth experience. Highly
                      recommended”
                    </blockquote>
                    <h6>
                      - Musa Jamy. <span>CEO babun</span>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-5 d-flex align-items-end justify-content-center order-lg-first">
                  <img
                    src="/assets/images/assets/businessman_02.png"
                    alt="man-img"
                    className="lazy-img"
                  />
                </div>
              </div>
            </div>
          </div>
          {service_items.map((s, i) => (
            <div key={i} className="col-lg-4 d-flex mt-40 md-mt-20">
              <div className="card-style-two bg-white vstack tran3s w-100">
                <img src={s.icon} alt="icon" className="lazy-img icon2 me-auto"/>
                <h4 className="fw-bold mt-50 mb-25">Our Mission</h4>
                <p className="mb-20">
                  Optimize expense tracking across platforms, & product lines
                  using multiple cards.
                </p>
                <NavLink to="/service-details"
                  className="arrow-btn tran3s mt-auto stretched-link"
                >
                  <img src="/assets/images/icon/icon_09.svg" alt="arrow-icon" className="lazy-img" />
                </NavLink>
              </div>
            </div>
          ))}
          <div className="col-lg-8 d-flex mt-40 md-mt-20">
            <div className="card-style-nineteen">
              <div className="row">
                <div className="col-lg-7">
                  <h2 className="color-deep fw-bold mt-20">We’r Babun</h2>
                  <p className="text-md mt-30 lg-mt-20 mb-35">
                    Your success is our mission. As business advisors, we offer
                    expert guidance, unlocking your potential
                  </p>
                  <NavLink to="/service-v2"
                    className="btn-seven d-inline-flex align-items-center"
                  >
                    <span className="text">Learn More</span>
                    <div className="icon tran3s rounded-circle d-flex align-items-center">
                      <img src="/assets/images/icon/icon_27.svg" alt="icon" className="lazy-img" />
                    </div>
                  </NavLink>
                </div>
                <div className="col-lg-4 ms-auto">
                  <div className="counter-block-one md-mt-40">
                    <div className="main-count fw-bold">
                      <span className="counter">710</span>k+
                    </div>
                    <p className="m0">Successful Projects</p>
                  </div>
                  <div className="counter-block-one mt-60 md-mt-20">
                    <div className="main-count fw-bold">
                      <span className="counter">1.2</span>x
                    </div>
                    <p className="m0">Rapid wealth grow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/images/shape/shape_45.svg" alt="shape" className="lazy-img shapes shape_01" />
    </div>
  );
};

export default BlockFeatureTwelve;
