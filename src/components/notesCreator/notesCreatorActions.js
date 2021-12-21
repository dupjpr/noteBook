import {
  TRAKING_NOTE,
} from '../../utilities/constants.js';

const actions = {
  writeNote: (data) => ({
    type: TRAKING_NOTE,
    payload: data
  })
};

const { writeNote } = actions;

const trakingNote = (data) => {
  return dispatch => {
    dispatch(writeNote(data))
  }
};

export { trakingNote };