import './assets/css/app.css';
import companyLogo from './assets/images/logo/trafalgar.svg';

const Header = () => {
  return (
  // header
  <div className="header">
    <div className="container">
      <div className="header__nav">
        <a className="header__logo" href="index.html">
          <img className="header__logo__img" src={companyLogo} alt="Trafalgar Logo" />
        </a>
        <ul className="header__nav__menu">
          <li className="header__nav__item">
            <a className="header__nav__link header__nav__link--active" href="#home">Home</a>
          </li>
          <li className="header__nav__item">
            <a className="header__nav__link" href="#find-a-doctor">Find a doctor</a>
          </li>
          <li className="header__nav__item">
            <a className="header__nav__link" href="#apps">Apps</a>
          </li>
          <li className="header__nav__item">
            <a className="header__nav__link" href="#testimonials">Testimonials</a>
          </li>
          <li className="header__nav__item">
            <a className="header__nav__link" href="#about-us">About us</a>
          </li>
        </ul>
        <button className="burger-menu js-mobile-menu" type="button">
          <span className="burger-menu__bar"></span>
          <span className="burger-menu__bar"></span>
          <span className="burger-menu__bar"></span>
        </button>
      </div>
    </div>
  </div>
  );
}

export default Header;