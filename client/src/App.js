import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Socialbar from './components/layout/Socialbar';
import Pitcher from './components/auth/Pitcher';
import Sponsor from './components/auth/Sponsor';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import Project from './components/projects/Project';
import SearchPage from './components/search/SearchPage';
import Signup from './components/layout/Signup';
import EditProfile from './components/auth/profile-forms/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './style.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // State to display the journey page from navbar and buttons on the landing page
  const [journeyState, setJourneyState] = useState({
    source: '',
  });

  const startJourney = (sourceValue) => {
    setJourneyState({ source: sourceValue });
    console.log(journeyState.source);
  };

  useEffect(() => {
    store.dispatch(loadUser());
    console.log('Finished running loadUser');
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar startJourney={startJourney} />
          <Socialbar />
          <Route exact path='/'>
            <Landing startJourney={startJourney} />
          </Route>
          <Alert />
          <Switch>
            {/* <Route exact path='/testvideo' component={TutorialVideo} /> */}
            <Route exact path='/signup'>
              <Signup source={journeyState.source} />
            </Route>
            <Route exact path='/pitcher' component={Pitcher} />
            <Route exact path='/sponsor' component={Sponsor} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/projects/:id' component={Project} />
            <Route exact path='/search' component={SearchPage} />
            {/* <Route exact path='/projects/:id' component={ProjectItem} /> */}
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
