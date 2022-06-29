import { Fragment } from "react";
import { TestimonyItem } from 'components';

const Testimony = ({ data }) => {
	const { title, item } = data;
	return (
		<div className="testimony">
      <div className="container">
        <div className="testimony__box">
          <div className="testimony__box__head">
            <h2 className="text-title text-title--white">{title}</h2>
          </div>
          <div className="testimony__list js-testimony">
            {
							item.map((val, idx) => {
								return (
									<Fragment key={idx}>
										<TestimonyItem data={val} />
									</Fragment>
								)
							}) 
						}
          </div>
        </div>
      </div>
    </div>
	);
};

export default Testimony;