import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_PROJECTS,
  PROJECT_ERROR,
  CREATE_PROJECT
} from './types';

// Get projects
export const getProjects = () => async dispatch => {
  try {
    const res = await axios.get('/api/projects');

    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}

// Create or edit a project
export const createProject = (formData, edit = false) => async dispatch => {
  const { projectAuthor, amountReq, purpose, projectName, sector, description, video, gofundme } = formData;

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ projectAuthor, amountReq, purpose, projectName, sector, description, video, gofundme });

  try {
    const res = await axios.post('/api/projects', body, config);

    dispatch({
      type: CREATE_PROJECT,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Project updated' : 'Project created', 'success'));

  } catch (err) {

    const errors = err.response.data.errors;

    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    })
  }
}