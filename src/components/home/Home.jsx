import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getDataAction } from '../../redux/fetchActions';
import Header from "../header/Header";
import Notes from "../notes/Notes";
import NotesCreator from "../notesCreator/NotesCreator";
import Loading from "../UI Library/loading/Loading";
import Container from '@mui/material/Container';
import './home.style.scss';

const DefaultComponent = () => {

  const storeData = useSelector(state => state);
  const dispatch = useDispatch();

  const { loadingFlag } = storeData

  useEffect(() => {
    dispatch(getDataAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='sectionHome-container'>
      <Container sx={
        {
          // backgroundColor: 'red',
          height: '10%',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        }
      }>
        <Header />
      </Container>

      <Container maxWidth='lg' sx={
        {
          width: '100%',
          height: '90%',
          display: 'flex',
          // backgroundColor: 'blue',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          margin: 0,
          padding: 0
        }
      }>
        <Notes />
        {loadingFlag ? <Loading /> : <NotesCreator />}
      </Container>

    </section>
  );
}

export default DefaultComponent;
