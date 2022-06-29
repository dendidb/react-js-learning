import logo from "assets/img/logo/trafalgar.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <a className="header__logo" href="index.html">
            <img className="header__logo__img" src={logo} alt="trafalgar" />
          </a>
          <button className="burger-menu js-mobile-menu" type="button">
            <span className="burger-menu__bar"></span>
          </button>
          <ul className="header__nav">
            <li className="header__nav__item">
              <a
                className="header__nav__link header__nav__link--active"
                href="index.html"
              >
                Home
              </a>
            </li>
            <li className="header__nav__item">
              <a className="header__nav__link" href="doctor.html">
                Find a doctor
              </a>
            </li>
            <li className="header__nav__item">
              <a className="header__nav__link" href="apps.html">
                Apps
              </a>
            </li>
            <li className="header__nav__item">
              <a className="header__nav__link" href="testimonials.html">
                Testimonials
              </a>
            </li>
            <li className="header__nav__item">
              <a className="header__nav__link" href="about.html">
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
