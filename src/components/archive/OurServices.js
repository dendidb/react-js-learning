import img1 from '../../assets/img/dummy/search-doctor.svg';
import img2 from '../../assets/img/dummy/online-pharmacy.svg';
import img3 from '../../assets/img/dummy/consultation.svg';
import img4 from '../../assets/img/dummy/details-info.svg';
import img5 from '../../assets/img/dummy/emergency-care.svg';
import img6 from '../../assets/img/dummy/tracking.svg';

import OurServicesItem from './OurServicesItem';

const OurServices = () => {

  const dataServices = {
		title: 'Our services',
		desc: 'We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health',
		button: {
			to: 'our-services.html',
			text: 'Learn more'
		},
		item: [
			{
				image: img1,
				title: 'Search doctor',
				desc: 'Choose your doctor from thousands of specialist, general, and trusted hospitals'
			},
			{
				image: img2,
				title: 'Online pharmacy',
				desc: 'Buy your medicines with our mobile application with a simple delivery system'
			},
			{
				image: img3,
				title: 'Consultation',
				desc: 'Choose your doctor from thousands of specialist, general, and trusted hospitals'
			},
			{
				image: img4,
				title: 'Details info',
				desc: 'Free consultation with our trusted doctors and get the best recomendations'
			},
			{
				image: img5,
				title: 'Emergency care',
				desc: 'You can get 24/7 urgent care for yourself or your children and your lovely family'
			},
			{
				image: img6,
				title: 'Tracking',
				desc: 'Track and save your medical history and health data'
			}
		]
	}

  return (
    <div className="our-services">
      <div className="container">
        <div className="our-services__head">
          <h2 className="text-title">{dataServices.title}</h2>
          <p className="our-services__desc">{dataServices.desc}</p>
        </div>
        <div className="our-services__body">
          <div className="our-services__list">
            {
              dataServices.item.map((v, i) => {
								return (
									<OurServicesItem key={`os-${i}`} img={v.image} title={v.title} desc={v.desc}  />
								)
              }) 
            }
          </div>
        </div>
        <div className="our-services__footer">
          <a className="btn btn--secondary" href={dataServices.button.to}>{dataServices.button.text}</a>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
