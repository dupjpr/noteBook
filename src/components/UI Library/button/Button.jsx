
const Button = ({ title, event, type }) => {

  return (
    <button
      onClick={event}
      type={type}
    >
      {title}
    </button>
  );
}

export default Button;