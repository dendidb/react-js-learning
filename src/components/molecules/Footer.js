import logo from "../../assets/img/logo/trafalgar-white.svg";

const Header = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__menu">
            <div className="footer__list js-accordion-footer">
              <div className="footer__list__item">
                <h4 className="footer__title">Company</h4>
                <ul className="footer__nav">
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="about.html">
                      About
                    </a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="testimonials.html">
                      Testimonials
                    </a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="doctor.html">
                      Find a doctor
                    </a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="apps.html">
                      Apps
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__list__item">
                <h4 className="footer__title">Region</h4>
                <ul className="footer__nav">
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="/">
                      Indonesia
                    </a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="/">
                      Singapore
                    </a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="/">
                      Hongkong
                    </a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="/">
                      Canada
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__list__item">
                <h4 className="footer__title">Help</h4>
                <ul className="footer__nav">
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="/">
                      Help center
                    </a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="/">
                      Contact support
                    </a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="/">
                      Instructions
                    </a>
                  </li>
                  <li className="footer__nav__item">
                    <a className="footer__nav__link" href="/">
                      How it works
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__about">
            <a className="footer__logo" href="/">
              <img className="footer__logo__el" src={logo} alt="Trafalgar" />
            </a>
            <div className="footer__text">
              <p className="footer__desc">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <p className="footer__copyright">
                ©Trafalgar PTY LTD 2020. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
