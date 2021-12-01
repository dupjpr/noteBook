import {
  GET_DATA_API,
  ERROR,
  NEW_NOTE_FLAG
} from '../../utilities/constants';

const rootReducer = (state, action) => {

  switch (action.type) {
    case GET_DATA_API:
      return {
        ...state,
        data: action.payload
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    case NEW_NOTE_FLAG:
      return {
        ...state,
        newNoteFlag: action.payload
      }
   
    default:
      return state
  }
}

export default rootReducer;
