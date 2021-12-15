import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../UI Library/button/Button";
import { trakingNote } from "../notesCreator/notesCreatorActions";
import { headerActions } from "../header/headerActions";
import { editList, idNoteSelect } from "./notesActions";
import { v4 as uuidv4 } from 'uuid';

const Notes = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { notes } = storeData;

  const handleEdit = (id) => {
    const filterNote = notes.filter((item) => item.id === id);
    dispatch(trakingNote(filterNote[0].note));
    // const newList = notes.filter((item) => item.id !== id);
    // dispatch(editList(newList));
    // localStorage.removeItem(id)
    dispatch(headerActions(true));
    dispatch(idNoteSelect(id));
  };

  // const handleDelete = (id) => {
  //   const newList = notes.filter((item) => item.id !== id);
  //   localStorage.removeItem(id)
  //   dispatch(editList(newList));
  // }

  return (
    <div>
      {/* <Button
        title='delete'
        event={() => handleDelete(deleteID)}
        icon={<i className="far fa-trash-alt"></i>}
      /> */}
      {notes.map(({ note, id }) => (
        <div
          key={uuidv4()}
        >
          <div onClick={() => handleEdit(id)}>{note}</div>
        </div>))}
    </div>
  );
}

export default Notes;