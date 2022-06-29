import cn from 'classnames';

const Logo = (props) => {
	const {to, children, type = 'button', variant = 'primary', block = false, arrowIcon = false} = props;

	const classNames = cn('btn', `btn--${variant}`, {
		'btn--block': block,
	});

	return (
		<>
			{ type === 'link' && (
				<a className={classNames} href={to}>
					{children}
					{arrowIcon && (
						<i className="icon-arrow-down"></i>
					)}
				</a>
			)}
			{ type !== 'link' && (
				<button className={classNames} href={to}>
					{children}
					{arrowIcon && (
						<i className="icon-arrow-down"></i>
					)}
				</button>
			)}
		</>
	);
}

export default Logo;