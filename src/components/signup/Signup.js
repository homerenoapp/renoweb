import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActions } from '../../state/ducks/user';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: 'Error',
      user: {},
    };
    this.displayName = React.createRef();
    this.password = React.createRef();
    this.matchingPassword = React.createRef();
    this.email = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(
      {
        user: {
          displayName: this.displayName.current.value,
          password: this.password.current.value,
          email: this.email.current.value,
          matchingPassword: this.matchingPassword.current.value,
        },
      },
      () => {
        this.props.signup(this.state.user);
      }
    );
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <form name="form" onSubmit={this.handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="displayName">Display Name</label>{' '}
              <input
                type="text"
                className="form-control"
                name="displayName"
                required
                ref={this.displayName}
                minLength="3"
                maxLength="20"
              />
              <div className="alert-danger">
                <div>Display Name is required</div>
                <div>Display Name must be at least 3 characters</div>
                <div>Display Name must be at most 20 characters</div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>{' '}
              <input
                type="email"
                className="form-control"
                name="email"
                ref={this.email}
                required
              />
              <div className="alert-danger">
                <div>Email is required</div>
                <div>Email must be a valid email address</div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>{' '}
              <input
                type="password"
                className="form-control"
                name="password"
                required
                ref={this.password}
                minLength="6"
              />
              <div className="alert-danger">
                <div>Password is required</div>
                <div>Password must be at least 6 characters</div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="matchingPassword">Confirm Password</label>{' '}
              <input
                type="password"
                className="form-control"
                name="matchingPassword"
                required
                ref={this.matchingPassword}
                minLength="6"
              />
              <div className="alert-danger">
                <div>Confirm Password is required</div>
                <div>Confirm Password must be at least 6 characters</div>
              </div>
            </div>
            <div className="form-group">
              <button onClick={this.handleSubmit}>Sign Up</button>
            </div>
            <div className="alert alert-warning">
              Signup failed! <br />
              {this.state.errorMessage}
            </div>
          </form>
          <div className="alert alert-success">
            Your registration is successful!
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // dispatch,
    ...bindActionCreators({ signup: userActions.signup }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
