import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CustomButton from "../UI Library/button/Button";
import { trakingNote, submitNote } from './notesCreatorActions';
import { headerActions } from "../header/headerActions";
import TextCard from "../UI Library/textCard/TextCard";
import { Box } from "@mui/system";
import { v4 as uuidv4 } from 'uuid';

const NotesCreator = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { data, newNoteFlag, textInput } = storeData;

  const notesKey = Object.keys(localStorage);

  const randomQuote = () => {

    const indexQuote = Math.floor(Math.random() * data.length);
    const quote = data[indexQuote];
    return quote

  };

  useEffect(() => {

    notesKey.forEach((key) => {
      const stringNote = localStorage.getItem(key);
      const objectNote = JSON.parse(stringNote);
      dispatch(submitNote(objectNote));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (e) => {
    const target = e.target;
    dispatch(trakingNote(target.value));
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const noteToStore = {
      id: uuidv4(),
      note: textInput,
      date: new Date()
    }

    textInput && dispatch(submitNote(noteToStore));

    const stringNote = JSON.stringify(noteToStore);

    textInput && localStorage.setItem(`${noteToStore.id}`, stringNote)

    dispatch(trakingNote(''));

    textInput && dispatch(headerActions(false));
  }

  return (
    <Box sx={{
      width:'60%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {newNoteFlag ? <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          type="text"
          onChange={(e) => handleChange(e)}
          value={textInput}
        />
        <CustomButton
          title='Send'
          type='submit'
          icon={<i className="far fa-paper-plane"></i>}
        />
      </form>
        :
        <TextCard info={randomQuote}/>
      }
    </Box>
  );
}

export default NotesCreator;