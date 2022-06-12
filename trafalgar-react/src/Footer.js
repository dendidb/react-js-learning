import FooterMenuItem from "./FooterMenuItem";
import footerCompanyLogo from "./assets/images/logo/trafalgar-footer.svg";

const Footer = () => {
  const footerMenuItem = [
    {
      title: "Company",
      nav: [
        {
          text: "About",
          link: "#about"
        },
        {
          text: "Testimonials",
          link: "#testimonials"
        },
        {
          text: "Find a doctor",
          link: "#find-a-doctor"
        },
        {
          text: "Apps",
          link: "#apps"
        },
      ],
    },
    {
      title: "Region",
      nav: [
        {
          text: "Indonesia",
          link: "#indonesia"
        },
        {
          text: "Singapore",
          link: "#singapore"
        },
        {
          text: "Hongkong",
          link: "#hongkong"
        },
        {
          text: "Canada",
          link: "#canada"
        },
      ],
    },
    {
      title: "Help",
      nav: [
        {
          text: "Help Center",
          link: "#help"
        },
        {
          text: "Contact Support",
          link: "#contact"
        },
        {
          text: "Intructions",
          link: "#Intructions"
        },
        {
          text: "How it works",
          link: "#how-it-works"
        },
      ],
    },
  ];

  return (
    // footer
    <div className="footer">
      <div className="container">
        <div className="footer__menu js-footer-accordion">
          {footerMenuItem.map((v, i) => {
            let title = v.title
            return (
              <FooterMenuItem key={`f-${i}`} title={title} items={v.nav} />
            )
          })}
        </div>
        <div className="footer__about">
          <a className="footer__logo" href="index.html">
            <img
              className="footer__logo__img"
              src={footerCompanyLogo}
              alt="Trafalgar Logo"
            />
          </a>
          <p className="footer__description">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p className="footer__copyright">
            © Trafalgar PTY LTD 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
