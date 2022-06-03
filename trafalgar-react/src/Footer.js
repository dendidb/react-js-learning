import FooterMenuItem from './FooterMenuItem';
import footerCompanyLogo from './assets/images/logo/trafalgar-footer.svg';

const Footer = () => {

  const footerMenuItem = [
      {
        title: 'Company',
        nav: [
          {
            title: 'About',
            link: '#about'
          },
          {
            title: 'Testimonials',
            link: '#testimonials'
          },
          {
            title: 'Find a doctor',
            link: '#find-a-doctor'
          },
          {
            title: 'Apps',
            link: '#apps'
          }
        ]
      },
      {
        title: 'Region',
        nav: [
          {
            title: 'Indonesia',
            link: '#indonesia'
          },
          {
            title: 'Singapore',
            link: '#singapore'
          },
          {
            title: 'Hongkong',
            link: '#hongkong'
          },
          {
            title: 'Canada',
            link: '#canada'
          }
        ]
      },
      {
        title: 'Help',
        nav: [
          {
            title: 'Help Center',
            link: '#help'
          },
          {
            title: 'Contact Support',
            link: '#contact'
          },
          {
            title: 'Intructions',
            link: '#Intructions'
          },
          {
            title: 'How it works',
            link: '#how-it-works'
          }
        ]
      }
    ]

  return (
    // footer
    <div className="footer">
      <div className="container">
        <div className="footer__menu js-footer-accordion">
          { footerMenuItem.nav.map((v, i) => {
            return (
              <FooterMenuItem key={`f-${i}`} title={v.title} to={v.to} text={v.text} />
            )
          })}
        </div>
        <div className="footer__about">
          <a className="footer__logo" href="index.html">
            <img className="footer__logo__img" src={footerCompanyLogo} alt="Trafalgar Logo" />
          </a>
          <p className="footer__description">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
          <p className="footer__copyright">© Trafalgar PTY LTD 2020. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;