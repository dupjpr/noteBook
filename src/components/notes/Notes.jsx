import { useDispatch, useSelector } from "react-redux";
import Button from "../UI Library/button/Button";
import { trakingNote } from "../notesCreator/notesCreatorActions";
import { headerActions } from "../header/headerActions";
import { idNoteSelect, setStatusButton } from "./notesActions";
import { v4 as uuidv4 } from 'uuid';

const Notes = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { buttonStatus, noteID } = storeData;

  const notesKey = Object.keys(localStorage);

  const handleEdit = (id) => {
    const stringNote = localStorage.getItem(id);
    const objectNote = JSON.parse(stringNote);
    dispatch(trakingNote(objectNote.note));
    dispatch(headerActions(true));
    dispatch(idNoteSelect(id));
    dispatch(setStatusButton(false));
  };

  const handleDelete = () => {
    localStorage.removeItem(noteID)
    dispatch(setStatusButton(true));
    dispatch(trakingNote(''));
    dispatch(headerActions(false));
  }

  const renderList = notesKey.map((key) => {
    const objectNote = JSON.parse(localStorage.getItem(key));
    const { note, id } = objectNote;
    return <div
      key={uuidv4()}
      onClick={() => handleEdit(id)}
    >
      {note}
    </div>
  });

  return (
    <div>
      <Button
        title='Delet'
        event={handleDelete}
        icon={<i className="far fa-file"></i>}
        status={buttonStatus}
      />
      {renderList}
    </div>
  );
}

export default Notes;