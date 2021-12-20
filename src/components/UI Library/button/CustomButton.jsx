import { Button } from "@mui/material";

const CustomIconButton = ({ title, color, event, type, icon, label }) => {

  return (
    <Button
      color={color}
      onClick={event}
      type={type}
      aria-label={label}
    >
      {title} {icon}
    </Button>
  );
}

export default CustomIconButton;