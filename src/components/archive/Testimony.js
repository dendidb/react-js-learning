import img1 from '../../assets/img/dummy/edward-newgate.jpg';

import TestimonyItem from './TestimonyItem';

const Testimony = () => {
	const dataTestimony = {
		title: 'What our customer are saying',
		item: [
			{
				img: img1,
				name: 'Edward Newgate',
				position: 'Founder Circle',
				testimony: '"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"'
			}
		]
	};

	return (
		<div className="testimony">
      <div className="container">
        <div className="testimony__box">
          <div className="testimony__box__head">
            <h2 className="text-title text-title--white">{dataTestimony.title}</h2>
          </div>
          <div className="testimony__list js-testimony">
            {
              dataTestimony.item.map((v, i) => {
								return (
									<TestimonyItem key={`os-${i}`} img={v.img} name={v.name} position={v.position} testimony={v.testimony} />
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