import React, { Component } from 'react';
import '../styles/loginComponent.css';
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
    store.dispatch({
      type: "LOGIN_REQUEST",
      payload: {this.state.id, this.state.password}
    });
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
        <div clasName="login-title">Login Page</div>
        <div className="App-intro">
          Please enter your employee id and password
        </div>
        <div>
          <span>Employee ID</span>
          <span>
            <input type="text" id="employeeId" onChange={this.onIdChange.bind(this)} />
          </span>
        </div>
        <div>
          <span>Password</span>
          <span>
            <input type="password" id="employeePassword" onChange={this.onPasswordChange.bind(this)} />
          </span>
        </div>
        <div>
          <span>
            <input type="submit" text="Submit" onClick={this.onSubmit} />
          </span>
        </div>
      </div>
    );
  }
}
