import { Button } from 'components';

const HeroBannerItem = ({data}) => {
		const {img, title, desc, button} = data;

		return ( 
			<div className="hero-banner__item">
				<div className="container">
					<div className="hero-banner__wrapper">
						<div className="hero-banner__img">
							<img className="hero-banner__img__el" src={img} alt={title} />
						</div>
						<div className="hero-banner__txt">
							<div className="hero-banner__txt__wrapper">
								<h1 className="hero-banner__title">{title}</h1>
								<p className="hero-banner__desc">{desc}</p>
								<div className="hero-banner__btn">
									<Button type="link" variant="primary" to={button.to}>
										{button.text}
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	
}

export default HeroBannerItem;
