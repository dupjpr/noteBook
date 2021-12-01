import { useDispatch, useSelector } from "react-redux";

const NotesCreator = () => {

  const storeData = useSelector(state => state);
  // const dispatch = useDispatch();

  const { data, newNoteFlag } = storeData;

  const randomQuote = () => {

    const indexQuote = Math.floor(Math.random() * data.length);
    const quote = data[indexQuote];
    return quote

  }

  const renderComponent = newNoteFlag ? <input type="text" /> :
    <>
      <div>{randomQuote().text}</div>
      <div>{randomQuote().author}</div>
    </>

  return (
    renderComponent
  );
}

export default NotesCreator;