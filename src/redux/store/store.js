import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';


const initialState = {
  data: '',
  loadingFlag: true,
  newNoteFlag: false,
  textInput: ''
}

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
