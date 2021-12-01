import {
  GET_DATA_API,
  ERROR,
  LOADING
} from '../utilities/constants';
import { _http } from "../utilities/httpRequest";

const demoUrl = 'https://type.fit/api/quotes';

const actions = {
  getData: (data) => ({
    type: GET_DATA_API,
    payload: data
  }),
  loadingData: (data) => ({
    type: LOADING,
    payload: data
  }),
  error: (data) => ({
    type: ERROR,
    payload: data
  })
}

const { loadingData, getData, error } = actions;

const getDataAction = () => {
  return dispatch => {
    _http.GET(demoUrl)
      .then((res) => {
        dispatch(getData(res));
        dispatch(loadingData(false));
      })
      .catch((e) => dispatch(error(e)));
  }
}

export { getDataAction };
