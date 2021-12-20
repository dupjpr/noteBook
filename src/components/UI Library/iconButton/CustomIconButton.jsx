import { IconButton } from "@mui/material";

const CustomIconButton = ({ color, event, type, icon, label, status }) => {

  return (
    <IconButton
      color={color}
      onClick={event}
      type={type}
      aria-label={label}
      disabled={status}
    >
      {icon}
    </IconButton>
  );
}

export default CustomIconButton;