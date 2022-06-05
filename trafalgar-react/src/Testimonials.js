import avatar1 from './assets/images/dummy/testimonials-1.jpg';
import avatar2 from './assets/images/dummy/testimonials-2.png';
import avatar3 from './assets/images/dummy/testimonials-3.png';
import avatar4 from './assets/images/dummy/testimonials-4.png';
import TestimonialsItem from './TestimonialsItem';

const Testimonials = () => {

  const testimonialsItem = [
    {
      image: avatar1,
      name: 'Edward Newgate',
      position: 'Founder Circle',
      caption: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
    },
    {
      image: avatar1,
      name: 'Edward Newgate',
      position: 'Founder Circle',
      caption: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
    },
    {
      image: avatar2,
      name: 'Edward Newgate',
      position: 'Founder Circle',
      caption: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
    },
    {
      image: avatar3,
      name: 'Edward Newgate',
      position: 'Founder Circle',
      caption: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
    },
    {
      image: avatar4,
      name: 'Edward Newgate',
      position: 'Founder Circle',
      caption: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
    }
  ]

  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__box">
          <div className="testimonials__head">
            <h3 className="text-title text-title--white">What our customer are saying</h3>
          </div>
          <div className="testimonials__body js-testimonials">
            { testimonialsItem.map((v, i) => {
              return (
                <TestimonialsItem key={`t-${i}`} image={v.image} title={v.title} name={v.name} position={v.position} caption={v.caption} />
              )
            })}
  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;