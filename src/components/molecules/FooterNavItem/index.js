const FooterNavItem = ({ data }) => {
  const { to, text } = data;

  return (
    <>
      <li className="footer__nav__item">
        <a className="footer__nav__link" href={to}>
          {text}
        </a>
      </li>
    </>
  );
};

export default FooterNavItem;
