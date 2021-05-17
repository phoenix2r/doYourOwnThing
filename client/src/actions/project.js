import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_PROJECTS,
  GET_PROJECT,
  PROJECT_ERROR,
  CREATE_PROJECT,
  CLEAR_PROJECTS,
} from './types';

// Get projects
export const getProjects = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/projects');

    dispatch({
      type: GET_PROJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get projects for a specific user
export const getProjectsForUser = (userid) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/projects/user/${userid}`);

    dispatch({
      type: GET_PROJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get projects associated with a specific user (sponsor)
export const getProjectsAssocWithUser = (sponsorid) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/projects/sponsor/${sponsorid}`);

    dispatch({
      type: GET_PROJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get projects that match a user's interests
export const getProjectsByInterests = (sponsorid) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/projects/match/${sponsorid}`);

    dispatch({
      type: GET_PROJECTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get one project by id
export const getProject = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/projects/${id}`);

    dispatch({
      type: GET_PROJECT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or edit a project
export const createProject = (
  {
    projectAuthor,
    amountReq,
    purpose,
    projectName,
    sector,
    description,
    keywords,
    video,
    gofundme,
  },
  edit = false
) => async (dispatch) => {
  // const { projectAuthor, amountReq, purpose, projectName, sector, description, video, gofundme } = formData;

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    projectAuthor,
    amountReq,
    purpose,
    projectName,
    sector,
    description,
    keywords,
    video,
    gofundme,
  });

  try {
    const res = await axios.post('/api/projects', body, config);

    dispatch({
      type: CREATE_PROJECT,
      payload: res.data,
    });

    dispatch(setAlert(edit ? 'Project updated' : 'Project created', 'success'));

    // if (!edit) {
    //   history.push('./dashboard');
    // }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Clear projects action to prep for dashboard
export const clearProjects = () => async (dispatch) => {
  dispatch({
    type: CLEAR_PROJECTS,
  });
};
