import {
  NOTE_ID,
  BUTTON_STATUS
} from '../../utilities/constants.js';

const actions = {
  noteID: (data) => ({
    type: NOTE_ID,
    payload: data
  }),
  status: (data) => ({
    type: BUTTON_STATUS,
    payload: data
  })
}

const { noteID, status } = actions;

const idNoteSelect = (data) => {
  return dispatch => {
    dispatch(noteID(data))
  }
};

const setStatusButton = (data) => {
  return dispatch => {
    dispatch(status(data))
  }
};
export { idNoteSelect, setStatusButton };
