const OurServicesItem = ({img, title, desc}) => {

  return (
    <div className="our-services__card">
			<div className="our-services__box">
				<div className="our-services__img">
					<img className="our-services__img__el" src={img} alt="Search doctor" />
				</div>
				<div className="our-services__txt">
					<h3 className="our-services__txt__title">{title}</h3>
					<p className="our-services__txt__desc">{desc}</p>
				</div>
			</div>
    </div>
	);
}

export default OurServicesItem;
