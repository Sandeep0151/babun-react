import { NavLink, useLocation } from "react-router-dom";

// internal
import menu_data from "../../data/menu-data";

const Navbar = ({ logo_white = false }: { logo_white?: boolean }) => {
  const { pathname } = useLocation();
  return (
    <ul className="navbar-nav align-items-lg-center">
      <li className="d-block d-lg-none">
        <div className="logo">
          <NavLink to="/" className="d-block">
            <img
              src={
                logo_white
                  ? "static/assets/images/logo/logo_01.svg"
                  : "static/assets/images/logo/logo_02.svg"
              }
              alt="logo"
            />
          </NavLink>
        </div>
      </li>
      {menu_data.map((menu) => (
        <li
          key={menu.id}
          className={`nav-item ${menu.dropdown ? "dropdown" : ""} ${
            menu.mega_menu ? "dropdown mega-dropdown-sm" : ""
          }`}
        >
          {menu.dropdown && (
            <>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {menu.title}
              </a>
              <ul className="dropdown-menu">
                {menu.dropdown_menus?.map((dm, i) => (
                  <li key={i}>
                    <NavLink
                      to={dm.link}
                      className={`dropdown-item ${pathname === dm.link ? "active" : ""}`}
                    >
                      <span>{dm.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </>
          )}
          {menu.mega_menu && (
            <>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {menu.title}
              </a>
              <ul className="dropdown-menu">
                <li className="row gx-1">
                  {menu.mega_menus?.map((mm) => (
                    <div key={mm.id} className="col-lg-4">
                      <div className="menu-column">
                        <ul className="style-none mega-dropdown-list">
                          {mm.menus.map((sm, i) => (
                            <li key={i}>
                              <NavLink
                                to={sm.link}
                                className={`dropdown-item ${pathname === sm.link ? "active" : ""}`}
                              >
                                <span>{sm.title}</span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </li>
              </ul>
            </>
          )}
          {!menu.dropdown && !menu.mega_menu && (
            <NavLink className="nav-link" to={menu.link} role="button">
              {menu.title}
            </NavLink>
          )}
        </li>
      ))}
      <li className="d-md-none ps-2 pe-2">
        <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
          className="signup-btn-one icon-link w-100 mt-20"
        >
          <span className="flex-fill text-center">Signup</span>
          <div className="icon rounded-circle d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-right"></i>
          </div>
        </a>
        <ul className="style-none contact-info m0 pt-30">
          <li className="d-flex align-items-center p0 mt-15">
            <img
              src="static/assets/images/icon/icon_14.svg"
              alt="icon"
              className="lazy-img icon me-2"
            />
            <a href="mailto:babuninc@company.com" className="fw-500">
              babuninc@company.com
            </a>
          </li>
          <li className="d-flex align-items-center p0 mt-15">
            <img
              src="static/assets/images/icon/icon_15.svg"
              alt="icon"
              className="lazy-img icon me-2"
            />
            <a href="tel:+757 699-4478" className="fw-500">
              +757 699-4478
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Navbar;
