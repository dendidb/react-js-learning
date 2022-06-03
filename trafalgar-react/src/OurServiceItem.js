const OurServiceItem = ({ image, title, desc }) => {

  return (
    <div className="service__card">
      <div className="service__card__box">
        <div className="service__card__img">
          <img className="service__card__img__el" src={image} alt={title} />
        </div>
        <div className="service__card__txt">
          <h3 className="service__card__title">{title}</h3>
          <p className="service__card__desc">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default OurServiceItem;