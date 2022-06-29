import { Fragment } from "react";
import { OurServicesItem, Button } from 'components';

const OurServices = ({data}) => {
	const { title, desc, item, button } = data;
	
  return (
    <div className="our-services">
      <div className="container">
        <div className="our-services__head">
          <h2 className="text-title">{title}</h2>
          <p className="our-services__desc">{desc}</p>
        </div>
        <div className="our-services__body">
          <div className="our-services__list">
            {
							item.map((val, idx) => {
								return (
									<Fragment key={idx}>
										<OurServicesItem data={val} />
									</Fragment>
								)
							}) 
						}
          </div>
        </div>
        <div className="our-services__footer">
					<Button type="link" variant="secondary" to={button.to}>
						{button.text}
					</Button>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
