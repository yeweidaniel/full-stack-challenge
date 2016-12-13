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
      id: undefined,
      password: undefined,
      errorMsg: undefined
    };
  }

  onSubmit() {
    const { id, password } = this.state;
    store.actions.loginActions.login(id, password, 
      undefined,
      (errorMsg) => {
        this.setState({
          errorMsg
        })
    });
  }

  onIdChange(val) {
    this.setState({id: val});
  }

  onPasswordChange(val) {
    this.setState({password: val})
  }

  render() {
    const errorElement = this.state.errorMsg ? (<div className="d-error-msg">{this.state.errorMsg}</div>) : undefined;

    return (
      <div className="d-container">
        <div className="d-login-title">
          User Performance Review Portal
        </div>
        <table className="d-login-area">
          <tbody>
            <tr className="d-login-field" key="0">
              <td className="d-login-prompt">Employee ID</td>
              <td>
                <input className="d-input-field" type="text" id="employeeId" onChange={this.onIdChange.bind(this)} />
              </td>
            </tr>
            <tr className="d-login-field" key="1">
              <td className="d-login-prompt">Password</td>
              <td>
                <input className="d-input-field" type="password" id="employeePassword" onChange={this.onPasswordChange.bind(this)} />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <input className="d-button" type="submit" name="Submit" onClick={this.onSubmit.bind(this)} />
          {errorElement}
        </div>
      </div>
    );
  }
}
