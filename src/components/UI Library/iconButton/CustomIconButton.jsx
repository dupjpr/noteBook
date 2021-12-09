import { IconButton } from "@mui/material";

const CustomIconButton = ({ color, event, type, icon, label }) => {

  return (
    <IconButton
      color={color}
      onClick={event}
      type={type}
      aria-label={label}
    >
      {icon}
    </IconButton>
  );
}

export default CustomIconButton;