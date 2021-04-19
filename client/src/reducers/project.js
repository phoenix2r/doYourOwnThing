import {
  GET_PROJECTS,
  PROJECT_ERROR,
  CREATE_PROJECT
} from '../actions/types';

const initialState = {
  projects: [],
  project: null,
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case GET_PROJECTS:
    case CREATE_PROJECT:
      return {
        ...state,
        posts: payload,
        loading: false
      }; 
    case PROJECT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default: 
      return state;
  }
}