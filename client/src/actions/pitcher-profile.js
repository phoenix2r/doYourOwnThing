import axios from 'axios';
import { setAlert } from './alert';

import { GET_PROFILE, PROFILE_ERROR } from './types';

// Get current user's profile
export const getCurrentPitcherProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/pitcher-profiles/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or update a pitcher's profile
export const createPitcherProfile = (
  { firstName, lastName, addressLine1, town, postcode },
  history,
  edit = false
) => async (dispatch) => {
  // const { firstName, lastName, addressLine1, town, postcode } = formData;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    firstName,
    lastName,
    addressLine1,
    town,
    postcode,
  });

  try {
    const res = await axios.post('/api/pitcher-profiles', body, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert(edit ? 'Profile updated' : 'Profile created', 'success'));

    // if(!edit) {
    //   history.pushState('/dashboard');
    // }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
