import React from 'react';
import facebook from '../../images/facebook.png';
import google from '../../images/google.png';
import { AppConstants } from '../../config/AppConstants';
import { TokenStorageService } from '../../state/middleware/TokenService';
import { UserService } from '../../state/middleware/UserService';
import { AuthService } from '../../state/middleware/AuthService';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActions } from '../../state/ducks/user';
import { Button } from '@material-ui/core';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.errorMessage = 'error';
    this.googleURL = AppConstants.GOOGLE_AUTH_URL;
    this.facebookURL = AppConstants.FACEBOOK_AUTH_URL;
    this.tokenStorage = TokenStorageService;
    this.userService = UserService;
    this.authService = AuthService;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.username = React.createRef();
    this.password = React.createRef();
  }

  componentDidMount() {
    // this.tokenStorage.signOut();
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const token = params.get('token'); //
    console.log('token', token);
    const { user } = this.props;
    const error = '';
    if (user.token) {
      this.props.history.push('/home');
    } else if (token) {
      this.props.saveToken({ token: token, getUser: true });
    } else {
      this.errorMessage = error;
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user.token) {
      nextProps.history.push('/home');
    }
    return {
      ...prevState,
    };
  }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  handleSubmit(event) {
    event.preventDefault();

    this.setState(
      {
        username: this.username.current.value,
        password: this.password.current.value,
      },
      () => {
        this.props.login(this.state);
      }
    );
    // alert('A name was submitted: ' + this.state.form);
    // ;
  }

  render() {
    const { user } = this.props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (
      <div
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#eee',
        }}
      >
        <form
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '20px',
            border: '1px solid gray',
            backgroundColor: '#ffffff',
          }}
          onSubmit={this.handleSubmit}
        >
          <input
            placeholder={'Username or Email'}
            type="text"
            ref={this.username}
            defaultValue={this.state.username}
            style={{ margin: '10px 0px 10px 0px' }}
          />
          <input
            placeholder={'Password'}
            type="password"
            ref={this.password}
            defaultValue={this.state.password}
            style={{ margin: '10px 0px 10px 0px' }}
          />
          <Button
            type="submit"
            variant="contained"
            style={{ margin: '10px 0px 10px 0px' }}
            color="primary"
          >
            Continue
          </Button>
          <a href={AppConstants.GOOGLE_AUTH_URL}>
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: '10px 0px 10px 0px' }}
              startIcon={
                <img
                  alt="Login with Google"
                  style={{ height: '30px', width: '30px' }}
                  src={google}
                />
              }
            >
              Gmail
            </Button>
          </a>
          <a href={AppConstants.FACEBOOK_AUTH_URL}>
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: '10px 0px 10px 0px' }}
              startIcon={
                <img
                  alt="Login with Facebook"
                  style={{ height: '30px', width: '30px' }}
                  src={facebook}
                />
              }
            >
              Facebook
            </Button>
          </a>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // dispatch,
    ...bindActionCreators(
      {
        login: userActions.login,
        saveToken: userActions.saveToken,
        fetchUser: userActions.fetchUser,
      },
      dispatch
    ),
  };
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.userState,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
