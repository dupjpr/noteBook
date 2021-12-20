
const Button = ({ title, event, type, icon, status }) => {

  return (
    <button
      onClick={event}
      type={type}
      disabled={status}
    >
      {title}{icon}
    </button>
  );
}

export default Button;