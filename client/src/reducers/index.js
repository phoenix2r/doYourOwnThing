import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import projects from './project';
import search from './search';

export default combineReducers({
  alert,
  auth,
  profile,
  projects,
  search,
});
