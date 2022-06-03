const TestimonialsItem = ({ image, name, position, caption }) => {

  return (
    <div class="testimonials__item">
      <div class="testimonials__customer">
        <div class="testimonials__avatar">
          <img class="testimonials__avatar__img" src={image} alt={name} />
          </div>
        <div class="testimonials__txt">
          <h3 class="testimonials__customer__name">{name}</h3>
          <p class="testimonials__customer__position">{position}</p>
        </div>
      </div>
      <div class="testimonials__desc">
        <p class="testimonials__desc__txt">{caption}</p>
      </div>
    </div>
  )
}

export default TestimonialsItem;