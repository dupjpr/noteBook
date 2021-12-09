import { Button } from "@mui/material";

const CustomButton = ({ color, title, event, type, icon }) => {

  return (
    <Button
      color={color}
      onClick={event}
      type={type}
      startIcon={icon}
    >
      {title}
    </Button>
  );
}

export default CustomButton;