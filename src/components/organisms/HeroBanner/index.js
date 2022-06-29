import { Fragment } from 'react';
import { HeroBannerItem } from 'components';

const HeroBanner = ({data}) => {
	return ( 
		<div className="hero-banner hero-banner--single">
			{
				data.map((val, idx) => {
					return (
						<Fragment key={idx}>
							<HeroBannerItem data={val} />
						</Fragment>
					)
				}) 
			}
		</div>
	);
}

export default HeroBanner;
