const Button = ({ type='button', to, variant = 'primary', text, children }) => {
  return (
    <>
      {type === 'button' && (
        <button type='button' className={`btn btn--${variant}`}>
          {children}
        </button>
      )}
      {type === 'link' && (
        <a href={to} className={`btn btn--${variant}`}>
          {children}
        </a>
      )}
    </>
  )
}
export default Button;