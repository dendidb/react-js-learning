const HeroBannerItem = ({ image, title, desc }) => {
  // destructuring concept
  // const { image, title, desc } = props;

  return (
    <div className="hero-banner__item">
      <div className="container">
        <div className="hero-banner__wrapper">
          <div className="hero-banner__img">
            <img className="hero-banner__img__el" src={image} alt={title} />
          </div>
          <div className="hero-banner__txt">
            <div className="hero-banner__txt__align">
              <h2 className="hero-banner__title">{title}</h2>
              <p className="hero-banner__desc">{desc}</p>
              <div className="hero-banner__btn">
                <a className="btn btn--primary" href="apps.html">
                  Consult today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerItem;
