const SectionDescriptionItem = ({ image, title, desc }) => {
  return (
    <>
      <div className="section-description__box">
        <div className="section-description__img">
          <img
            className="section-description__img__el"
            src={image}
            alt={title}
          />
        </div>
        <div className="section-description__txt">
          <div className="section-description__txt__wrapper">
            <h3 className="text-title text-title--left">{title}</h3>
            <p className="text-desc text-desc--left">{desc}</p>
            <a className="btn btn--secondary" href="#learn-more">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionDescriptionItem;
