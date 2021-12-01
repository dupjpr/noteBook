import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getDataAction } from '../../redux/fetchActions';
import './home.style.scss';
import Header from "../header/Header";
import Notes from "../notes/Notes";
import NotesCreator from "../notesCreator/NotesCreator";

const DefaultComponent = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const {data} = storeData

  useEffect(() => {
    dispatch(getDataAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(storeData);

  return (
    <section className='sectionHome-container'>
      <Header />
      <Notes />
      {data && <NotesCreator />}
    </section>
  );
}

export default DefaultComponent;
