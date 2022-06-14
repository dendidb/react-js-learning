import avatar1 from "./assets/images/dummy/testimonials-1.jpg";
import TestimonialsItem from "./TestimonialsItem";

const Testimonials = () => {
  const testimonialsItem = [
    {
      image: avatar1,
      name: "Edward Newgate",
      position: "Founder Circle",
      caption:
        "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__box">
          <div className="testimonials__head">
            <h3 className="text-title text-title--white">
              What our customer are saying
            </h3>
          </div>
          <div className="testimonials__body js-testimonials">
            {testimonialsItem.map((v, i) => {
              return (
                <TestimonialsItem
                  key={`t-${i}`}
                  image={v.image}
                  title={v.title}
                  name={v.name}
                  position={v.position}
                  caption={v.caption}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
