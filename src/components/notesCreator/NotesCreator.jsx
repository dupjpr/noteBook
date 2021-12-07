import { useDispatch, useSelector } from "react-redux";
import Button from "../UI Library/button/Button";
import { trakingNote, submitNote } from './notesCreatorActions';
import { v4 as uuidv4 } from 'uuid';



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
    textInput && dispatch(submitNote(
      {
        id: uuidv4(),
        note: textInput,
        date: new Date()
      }
    ));
    dispatch(trakingNote(''));
  }

  return (
    <div>
      {newNoteFlag ? <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          type="text"
          onChange={(e) => handleChange(e)}
          value={textInput}
        />
        <Button
          title='save'
          type='submit'
          icon={<i className="far fa-save"></i>}
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