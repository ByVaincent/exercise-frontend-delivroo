const Button = ({ icon, text, disabled }) => {
  return (
    <button disabled={disabled || false}>
      <i className={icon}></i>
      <span>{text}</span>
    </button>
  );
};
export default Button;
