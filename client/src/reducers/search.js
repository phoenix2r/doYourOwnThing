import {
  FIND_PROJECTS,
  FIND_PROJECT,
  SEARCH_ERROR,
  CLEAR_SEARCH,
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
    case SEARCH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        results: initialState.results,
        result: initialState.result,
        error: {},
      };
    default:
      return state;
  }
}
