import {
  GET_DATA_API,
  ERROR,
  LOADING,
  NEW_NOTE_FLAG,
  TRAKING_NOTE,
  SAVE_NOTE,
  NEW_LIST,
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
    case LOADING:
      return {
        ...state,
        loadingFlag: action.payload
      }
    case NEW_NOTE_FLAG:
      return {
        ...state,
        newNoteFlag: action.payload
      }
    case TRAKING_NOTE:
      return {
        ...state,
        textInput: action.payload
      }
    case SAVE_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      }
    case NEW_LIST:
      return {
        ...state,
        notes: action.payload
      }
    default:
      return state
  }
}

export default rootReducer;
