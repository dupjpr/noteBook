import { useDispatch } from "react-redux";
import CustomButton from "../UI Library/button/Button";

import { headerActions } from "./headerActions";

const Header = () => {

  const dispatch = useDispatch();

  function handleclick() {
    dispatch(headerActions(true));
  }

  return (
    <header>
      <CustomButton
        title='New Note'
        event={handleclick}
        icon={<i className="far fa-file"></i>}
      />
    </header>
  );
}

export default Header;