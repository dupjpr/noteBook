import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getDataAction } from '../../redux/fetchActions';
import './home.style.scss';
import Header from "../header/Header";
import Notes from "../notes/Notes";
import NotesCreator from "../notesCreator/NotesCreator";
import Loading from "../UI Library/loading/Loading";

const DefaultComponent = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { loadingFlag } = storeData

  useEffect(() => {
    dispatch(getDataAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(storeData);

  return (
    <section className='sectionHome-container'>
      <Header />
      <Notes />
      {loadingFlag ? <Loading /> : <NotesCreator />}
    </section>
  );
}

export default DefaultComponent;
