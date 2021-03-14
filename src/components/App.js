import '../styles/App.css';
import React from 'react';
import {
  Router,
  Redirect,
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import { Navigation } from './Navigation';
import Home from './home/Home';
import Login from './login/Login';
import Signup from './signup/Signup';
// import PrivateRoute from './reusableComponents/PrivateRoute';
import { connect } from 'react-redux';
import history from '../config/History';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter basename="/home" history={history}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {/* <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('app', state);
  return {
    user: state.userState,
  };
};

export default connect(mapStateToProps)(App);
