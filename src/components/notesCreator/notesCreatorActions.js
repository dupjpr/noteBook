import {
  TRAKING_NOTE,
  SAVE_NOTE
} from '../../utilities/constants.js';

const actions = {
  writeNote: (data) => ({
    type: TRAKING_NOTE,
    payload: data
  }),
  saveNote: (data) => ({
    type: SAVE_NOTE,
    payload: data
  })
}

const { writeNote, saveNote } = actions;

const trakingNote = (data) => {
  return dispatch => {
    dispatch(writeNote(data))
  }
}

const submitNote = (data) => {

  return dispatch => {

    dispatch(saveNote(data))

  }
}

export { trakingNote, submitNote };
