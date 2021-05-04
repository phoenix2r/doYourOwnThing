import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Socialbar from './components/layout/Socialbar';
import Pitcher from './components/auth/Pitcher';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import ProjectItem from './components/projects/ProjectItem';
import EditProfile from './components/auth/profile-forms/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
    console.log('Finished running loadUser');
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Socialbar />
          <Route exact path='/' component={Landing} />
          <Alert />
          <Switch>
            <Route exact path='/pitcher' component={Pitcher} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/projects/:id' component={ProjectItem} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
