import { useDispatch } from "react-redux";
import CustomButton from "../UI Library/button/Button";
import { Container } from "@mui/material";

import { headerActions } from "./headerActions";

const Header = () => {

  const dispatch = useDispatch();

  function handleclick() {
    dispatch(headerActions(true));
  }

  return (
    <Container
      component='header'
    >
      <CustomButton
        title='New Note'
        event={handleclick}
        icon={<i className="far fa-file"></i>}
      />
    </Container>
  );
}

export default Header;