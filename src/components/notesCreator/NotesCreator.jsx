import { useDispatch, useSelector } from "react-redux";
import Button from "../UI Library/button/Button";
import { trakingNote } from './notesCreatorActions';
import { headerActions } from "../header/headerActions";
import { idNoteSelect, setStatusButton } from "../notes/notesActions";
import { v4 as uuidv4 } from 'uuid';

const NotesCreator = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { data, newNoteFlag, textInput, noteID } = storeData;

  const notesKey = Object.keys(localStorage);

  const randomQuote = () => {
    const indexQuote = Math.floor(Math.random() * data.length);
    const quote = data[indexQuote];
    return quote
  };

  const retreveLocalStorage = () => {
    const dataLocalStorage = notesKey.map((key) => {
      const stringNote = localStorage.getItem(key);
      const objectNote = JSON.parse(stringNote);
      return objectNote
    });
    return dataLocalStorage
  };

  const handleChange = (e) => {
    const target = e.target;
    dispatch(trakingNote(target.value));
  };

  const jsonConfig = (noteToStore) => {
    const stringNote = JSON.stringify(noteToStore);
    textInput && localStorage.setItem(`${noteToStore.id}`, stringNote);
    dispatch(setStatusButton(true))
  };

  const newNote = () => {
    const noteToStore = {
      id: uuidv4(),
      note: textInput,
      date: new Date()
    }
    jsonConfig(noteToStore);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (notesKey.length) {
      const check = retreveLocalStorage().some(({ id }) => id === noteID);
      dispatch(idNoteSelect(''));
      if (check) {
        const noteToStore = JSON.parse(localStorage.getItem(noteID));
        noteToStore.note = textInput;
        jsonConfig(noteToStore);
      } else {
        newNote();
      };
    } else {
      newNote();
    };
    dispatch(trakingNote(''));
    textInput && dispatch(headerActions(false));
  };

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