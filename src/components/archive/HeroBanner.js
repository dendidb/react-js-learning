import imgBanner from "../../assets/img/dummy/virtual-healthcare.png";

import Button from "./Button";

const HeroBanner = () => {
  const dataBanner = [
    {
      img: imgBanner,
      title: "Virtual healthcare for you",
      desc: "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone",
      button: {
        to: "consult",
        text: "Consult Today",
      },
    },
  ];

  return (
    <div className="hero-banner hero-banner--single">
      {dataBanner.map((v, i) => {
        return (
          <div className="hero-banner__item" key={`b-${i}`}>
            <div className="container">
              <div className="hero-banner__wrapper">
                <div className="hero-banner__img">
                  <img
                    className="hero-banner__img__el"
                    src={v.img}
                    alt={v.title}
                  />
                </div>
                <div className="hero-banner__txt">
                  <div className="hero-banner__txt__wrapper">
                    <h1 className="hero-banner__title">{v.title}</h1>
                    <p className="hero-banner__desc">{v.desc}</p>
                    <div className="hero-banner__btn">
                      <Button type="link" variant="primary" to={v.button.to}>
                        {v.button.text}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroBanner;
