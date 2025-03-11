const Button = ({ icon, text }) => {
  return (
    <button>
      <i className={icon}></i>
      <span>{text}</span>
    </button>
  );
};
export default Button;
