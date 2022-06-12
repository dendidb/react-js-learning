const FooterNavItem = ({ title, items }) => {
  return (
    // footer-menu-item
    <div className="footer__menu__item">
      <h3 className="footer__title">{title}</h3>
      <ul className="footer__nav">
        {items.map((v, i) => {
          return (
            <li key={`f-${i}`} className="footer__nav__item">
              <a className="footer__nav__link" href={v.link}>
                {v.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterNavItem;
