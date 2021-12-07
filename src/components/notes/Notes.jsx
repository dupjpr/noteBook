import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react'
import Button from "../UI Library/button/Button";
import { trakingNote } from "../notesCreator/notesCreatorActions";
import { headerActions } from "../header/headerActions";
import { editList } from "./notesActions";
import { v4 as uuidv4 } from 'uuid';

const Notes = () => {

  const [state, setstate] = useState(true);

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { notes } = storeData;

  const notesKey = Object.keys(localStorage);

  const localStorageHandleInfo = () => {

    const finalNotes = notesKey.map((key) => {
      const stringNote = localStorage.getItem(key);
      const objectNote = JSON.parse(stringNote);
      return objectNote
    })
    return finalNotes
  }

  

  const handleEdit = (id) => {
    const filterNote = notes.filter((item) => item.id === id);
    dispatch(trakingNote(filterNote[0].note));
    const newList = notes.filter((item) => item.id !== id);
    dispatch(editList(newList));
    // dispatch(headerActions(true));
  };

  const handleDelete = (id) => {
    const element = localStorageHandleInfo().filter((item) => item.id === id);
    // console.log(element);
    localStorage.removeItem(id)
    setstate(!state)



    
    // dispatch(editList(newList));
  }

  return (
    <div>

      {localStorageHandleInfo().map(({ note, id }) => (
        <div
          key={uuidv4()}
        >
          <div onClick={() => handleEdit(id)}>{note}</div>
          <Button
            title='delete'
            event={() => handleDelete(id)}
            icon={<i className="far fa-trash-alt"></i>}
          />
        </div>))}


      {/* {notes.map(({ note, id }) => (
        <div
          key={uuidv4()}
        >
          <div onClick={() => handleEdit(id)}>{note}</div>
          <Button
            title='delete'
            event={() => handleDelete(id)}
            icon={<i className="far fa-trash-alt"></i>}
          />
        </div>))} */}
    </div>
  );
}

export default Notes;