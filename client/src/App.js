import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Socialbar from './components/layout/Socialbar';
import Pitcher from './components/auth/Pitcher';
import Login from './components/auth/Login';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Socialbar />
      <Route exact path="/" component={ Landing } />
      <Switch>
        <Route exact path="/pitcher" component={ Pitcher } />
        <Route exact path="/login" component={ Login } />
      </Switch>
    </Fragment>
  </Router>
);
    

export default App;
