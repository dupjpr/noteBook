
const Button = ({ title, event }) => {

  return (
    <button onClick={event}>
      {title}
    </button>
  );
}

export default Button;