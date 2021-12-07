import { useDispatch } from "react-redux";
import Button from "../UI Library/button/Button";

import { headerActions } from "./headerActions";

const Header = () => {

  const dispatch = useDispatch();

  function handleclick() {
    dispatch(headerActions(true));
  }

  return (
    <header>
      <Button
        title='New Note'
        event={handleclick}
        icon={<i className="far fa-file"></i>}
      />
    </header>
  );
}

export default Header;