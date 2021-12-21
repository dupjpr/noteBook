import {
  NEW_NOTE_FLAG
} from '../../utilities/constants.js';

const actions = {
  newNote: (booleanFlag) => ({
    type: NEW_NOTE_FLAG,
    payload: booleanFlag
  })
};

const { newNote } = actions;

const headerActions = (boolean) => {
  return dispatch => {
    dispatch(newNote(boolean))
  }
};

export { headerActions };
