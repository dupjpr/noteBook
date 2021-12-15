import {
  NEW_LIST,
  NOTE_ID
} from '../../utilities/constants.js';

const actions = {
  edit: (data) => ({
    type: NEW_LIST,
    payload: data
  }),
  noteID: (data) => ({
    type: NOTE_ID,
    payload: data
  })
}

const { edit, noteID } = actions;

const editList = (data) => {
  return dispatch => {
    dispatch(edit(data))
  }
}

const idNoteSelect = (data) => {
  return dispatch => {
    dispatch(noteID(data))
  }
}

export { editList, idNoteSelect };
