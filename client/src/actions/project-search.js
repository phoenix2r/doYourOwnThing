import axios from 'axios';
import { setAlert } from './alert';
import {
  FIND_PROJECTS,
  FIND_PROJECT,
  SEARCH_ERROR,
  CLEAR_SEARCH,
} from './types';

// Get projects that match a user's interests
export const getProjectsByInterests = (sponsorid) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/projects/match/${sponsorid}`);

    dispatch({
      type: FIND_PROJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get projects that match a user's interests
export const getProjectsBySearchTerms = (searchterms) => async (dispatch) => {
  try {
    const res = await axios.get(
      `/api/projects/search/search?searchTerms=${searchterms}`
    );

    dispatch({
      type: FIND_PROJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Clear search action to prep for new search and avoid key clashes
export const clearSearch = () => async (dispatch) => {
  dispatch({
    type: CLEAR_SEARCH,
  });
};
