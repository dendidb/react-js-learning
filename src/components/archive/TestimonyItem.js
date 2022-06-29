const TestimonyItem = ({img, name, position, testimony}) => {

	return (
		<div className="testimony__item owl-item active">
			<div className="testimony__custommer">
				<div className="testimony__avatar">
					<img className="testimony__avatar__el" src={img} alt={name} />
				</div>
				<div className="testimony__txt">
					<p className="testimony__custommer__name">{name}</p>
					<p className="testimony__custommer__position">{position}</p>
				</div>
			</div>
			<div className="testimony__desc">
				<p className="testimony__desc__text">{testimony}</p>
			</div>
		</div>
	);
};

export default TestimonyItem;