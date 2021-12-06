
const Button = ({ title, event, type, icon }) => {

  return (
    <button
      onClick={event}
      type={type}
    >
      {title}{icon}
    </button>
  );
}

export default Button;