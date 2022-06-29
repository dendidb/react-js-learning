import cn from 'classnames';
import { Button } from 'components';

const SectionDescription = ( {data, reverse = false, arrowIcon = false} ) => {

	const classNames = cn('section-description', {
		'section-description--reverse': reverse,
	});

	return ( 
		<div className={classNames}>
			<div className="container">
				<div className="section-description__wrapper">
					<div className="section-description__img">
						<img className="section-description__img__el" src={data.img} alt={data.title} />
					</div>
					<div className="section-description__txt">
						<div className="section-description__txt__wrapper">
							<h3 className="text-title text--left">{data.title}</h3>
							<p className="section-description__desc">{data.desc}</p>
							<Button type="link" variant="secondary" to={data.button.to} arrowIcon={arrowIcon} >
								{data.button.text}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	
}

export default SectionDescription;
