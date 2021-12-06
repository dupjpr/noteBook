import { useDispatch, useSelector } from "react-redux";
import Button from "../UI Library/button/Button";
import { v4 as uuidv4 } from 'uuid';

const Notes = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { notes } = storeData;

  return (
    <div>
      {notes.map(({ note }) => (
        <div key={uuidv4()}>
          <div >{note}</div>
          <Button 
          title='delete'
          icon={<i className="far fa-trash-alt"></i>} />
        </div>))}
    </div>
  );
}

export default Notes;