import {
  NEW_LIST,
} from '../../utilities/constants.js';

const actions = {
  edit: (data) => ({
    type: NEW_LIST,
    payload: data
  })
}

const { edit } = actions;

const editList = (data) => {
  return dispatch => {
    dispatch(edit(data))
  }
}

export { editList };
