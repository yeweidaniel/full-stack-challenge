import React, { Component } from 'react';
import '../styles/loginContainer.css';
import { store } from '../index.js';

const mapStateToProps = (state) => ({
  userContext: state.userContext
});

export default class LoginContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      id: null,
      password: null
    };
  }

  onSubmit() {
    const { id, password } = this.state;
    store.actions.loginActions.login(id, password);
  }

  onIdChange(val) {
    this.setState({id: val});
  }

  onPasswordChange(val) {
    this.setState({password: val})
  }

  render() {
    return (
      <div className="App">
        <div className="d-login-title">
          User Performance Review Portal
        </div>
        <div className="d-login-field">
          <span className="d-login-prompt">Employee ID</span>
          <span>
            <input className="d-input-field" type="text" id="employeeId" onChange={this.onIdChange.bind(this)} />
          </span>
        </div>
        <div className="d-login-field">
          <span className="d-login-prompt">Password</span>
          <span>
            <input className="d-input-field" type="password" id="employeePassword" onChange={this.onPasswordChange.bind(this)} />
          </span>
        </div>
        <div>
          <span>
            <input className="d-button" type="submit" text="Submit" onClick={this.onSubmit} />
          </span>
        </div>
      </div>
    );
  }
}
