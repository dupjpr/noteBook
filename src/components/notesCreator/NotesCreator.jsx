import { useDispatch, useSelector } from "react-redux";
import Button from "../UI Library/button/Button";
import { trakingNote, submitNote } from './notesCreatorActions';


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
    dispatch(trakingNote(target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    textInput && dispatch(submitNote({note:textInput}));
    dispatch(trakingNote(''));
  }

  return (
    <div>
      {newNoteFlag ? <form onSubmit={(e)=>handleSubmit(e)}>
        <textarea
          type="text"
          onChange={(e) => handleChange(e)}
          value={textInput}
        />
        <Button
          title='save'
          type='submit'
        />
      </form>
        :
        <>
          <div>{randomQuote().text}</div>
          <div>{randomQuote().author}</div>
        </>
      }
    </div>
  );
}

export default NotesCreator;