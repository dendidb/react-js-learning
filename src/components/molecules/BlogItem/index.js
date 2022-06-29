const BlogItem = ({ data}) => {
	const {img, title, desc, to} = data;

  return (
		<div className="blog__card">
			<div className="blog__box">
				<a className="blog__box__link" href={to}>{title}</a>
				<div className="blog__img">
					<img className="blog__img__el" src={img} alt={title} />
				</div>
				<div className="blog__txt">
					<h3 className="blog__txt__title">{title}</h3>
					<p className="blog__txt__desc">{desc}</p>
					<button className="blog__txt__btn">
						Read more<i className="icon-arrow-right"></i>
					</button>
				</div>
			</div>
		</div>
  );
}

export default BlogItem;
