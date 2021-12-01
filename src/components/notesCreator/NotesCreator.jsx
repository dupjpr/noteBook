import { useDispatch, useSelector } from "react-redux";
import { trakingNote } from './notesCreatorActions';

const NotesCreator = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { data, newNoteFlag, textInput } = storeData;

  const randomQuote = () => {

    const indexQuote = Math.floor(Math.random() * data.length);
    const quote = data[indexQuote];
    return quote

  };

  const handleChange = (e) => {
    const target = e.target;
    dispatch(trakingNote(target.value))
  };

  return (
    <div>
      {newNoteFlag ? <input
        type="text"
        onChange={(e) => handleChange(e)}
        value={textInput}
      /> :
        <>
          <div>{randomQuote().text}</div>
          <div>{randomQuote().author}</div>
        </>
      }
    </div>
  );
}

export default NotesCreator;