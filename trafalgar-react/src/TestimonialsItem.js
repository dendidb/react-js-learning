const TestimonialsItem = ({ image, name, position, caption }) => {
  return (
    <div className="testimonials__item">
      <div className="testimonials__customer">
        <div className="testimonials__avatar">
          <img className="testimonials__avatar__img" src={image} alt={name} />
        </div>
        <div className="testimonials__txt">
          <h3 className="testimonials__customer__name">{name}</h3>
          <p className="testimonials__customer__position">{position}</p>
        </div>
      </div>
      <div className="testimonials__desc">
        <p className="testimonials__desc__txt">{caption}</p>
      </div>
    </div>
  );
};

export default TestimonialsItem;
