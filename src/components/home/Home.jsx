// import { useDispatch, useSelector } from "react-redux";
// import { Fragment, useEffect } from 'react';
// import { getDataAction } from '../../redux/fetchActions'
import './home.style.scss';
import Header from "../header/Header";
import Notes from "../notes/Notes";
import NotesCreator from "../notesCreator/NotesCreator";

const DefaultComponent = () => {

  // const storeData = useSelector(state => state);
  // const dispatch = useDispatch();
  
  return (
    <section className='sectionHome-container'>
      <Header/>
      <Notes/>
      <NotesCreator/>
    </section>
  );
}

export default DefaultComponent;
