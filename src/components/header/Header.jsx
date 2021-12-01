import { useDispatch } from "react-redux";

import { homeActions } from "./headerActions";

const Header = () => {
  
  const dispatch = useDispatch();

  function handleclick() {
    dispatch(homeActions(true))
  }

  return (
    <header>

      <button
        onClick={handleclick}
      >
        new note
      </button>

    </header>
  );
}

export default Header;