import {
  FIND_PROJECTS,
  FIND_PROJECT,
  PROJECT_ERROR,
  CLEAR_PROJECTS,
} from '../actions/types';

const initialState = {
  results: [],
  result: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FIND_PROJECTS:
      return {
        ...state,
        results: payload,
        loading: false,
      };
    case FIND_PROJECT:
      return {
        ...state,
        result: payload,
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
        results: initialState.results,
        result: initialState.result,
      };
    default:
      return state;
  }
}
