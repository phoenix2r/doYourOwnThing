import {
  GET_PROJECTS,
  GET_PROJECT,
  PROJECT_ERROR,
  CREATE_PROJECT,
  CLEAR_PROJECTS,
} from '../actions/types';

const initialState = {
  projects: [],
  project: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECTS:
    case CREATE_PROJECT:
      return {
        ...state,
        projects: payload,
        loading: false,
      };
    case GET_PROJECT:
      return {
        ...state,
        project: payload,
        loading: false,
      };
    case PROJECT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PROJECTS:
      return {
        ...state,
        projects: initialState.projects,
        project: initialState.project,
      };
    default:
      return state;
  }
}
