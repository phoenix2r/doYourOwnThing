import axios from 'axios';
import { setAlert } from './alert';
import {
  FIND_PROJECTS,
  FIND_PROJECT,
  PROJECT_ERROR,
  CLEAR_PROJECTS,
} from './types';

// Get projects that match a user's interests
export const getProjectsByInterests = (sponsorid) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/projects/match/${sponsorid}`);

    dispatch({
      type: FIND_PROJECTS,
      payload: res.data,
    });
    console.log('HERE');
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
