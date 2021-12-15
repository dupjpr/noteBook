import { useDispatch, useSelector } from "react-redux";
import CustomIconButton from '../UI Library/iconButton/CustomIconButton'
import { trakingNote } from "../notesCreator/notesCreatorActions";
import { headerActions } from "../header/headerActions";
import { editList } from "./notesActions";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { v4 as uuidv4 } from 'uuid';

const Notes = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { notes } = storeData;

  const handleEdit = (id) => {
    const filterNote = notes.filter((item) => item.id === id);
    dispatch(trakingNote(filterNote[0].note));
    const newList = notes.filter((item) => item.id !== id);
    dispatch(editList(newList));
    localStorage.removeItem(id)
    dispatch(headerActions(true));
  };

  const handleDelete = (id) => {
    const newList = notes.filter((item) => item.id !== id);
    localStorage.removeItem(id)
    dispatch(editList(newList));
  }

  return (
    <Box sx={{
      width: '40%',
      height: '100%'
    }}>
      {notes.map(({ note, id }) => (
        <div
          key={uuidv4()}
        >
          <div onClick={() => handleEdit(id)}>{note}</div>
          <CustomIconButton
            color='primary'
            event={() => handleDelete(id)}
            icon={<i className="far fa-trash-alt"></i>}
            label='delete'
          />
        </div>))}
    </Box>
  );
}

export default Notes;