const FooterNavItem = ({ title, to, text }) => {

  return (
    // footer-menu-item
    <div className="footer__menu__item">
      <h3 className="footer__title">{title}</h3>
      <ul className="footer__nav">
        <li className="footer__nav__item">
          <a className="footer__nav__link" href={to}>{text}</a>
        </li>
      </ul>
    </div>
  )
}

export default FooterNavItem;