import React, { Component } from 'react';
import '../styles/adminContainer.css';

export default class Users extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = this.initialState;
  }

  initialState = {
      showAdd: false,
      newName: null,
      newEmail: null,
      newPassword: null,
      newRole: null
    };

  resetState() {
    this.setState(this.initialState);
  }

  roleOptions = [
    <option value="Admin" key="0">Admin</option>,
    <option value="Employee" key="1">Employee</option>
  ];

  submitNewUser() {
    const { newName, newPassword, newRole, newEmail } = this.state;
    const { actions } = this.props;

    if (!newName || !newPassword || !newRole || !newEmail) {
      //show user actions
      return;
    }

    actions.addUser(newName, newEmail, newPassword, newRole);
  }

  renderAddUserForm() {
    const { showAdd } = this.state;
    if (!showAdd) {
      return null;
    }

    return (
      <div className="d-new-user-area">
        <ul>
          <li className="d-new-user-field no-hover">
            <div>
              <span>User Name</span>
            </div>
            <input type="text" id="userName"
              onChange={(e) => this.setState({
                newName: e.target.value
              })} />
          </li>
          <li className="d-new-user-field no-hover">
            <div>
              <span>User Email</span>
            </div>
            <input type="text" id="userEmail"
              onChange={(e) => this.setState({
                newEmail: e.target.value
              })} />
          </li>
          <li className="d-new-user-field no-hover">
            <div>
              <span>Password</span>
            </div>
            <input type="password" id="newPassword"
              onChange={(e) => this.setState({
                newPassword: e.target.value
              })} />
          </li>
          <li className="d-new-user-field no-hover">
            <div>
              <span>Role</span>
            </div>
            <select
              onChange={(e) => this.setState({
                newRole: e.target.value
              })}>
                <option value="" key="-1" />
                {this.roleOptions}
            </select>
          </li>
        </ul> 
        <input className="d-submit-button"
              type="button" id="Submit" value="Submit"
              onClick={this.submitNewUser.bind(this)} />
      </div>
    );
  }

  renderAddUserButton() {
    return (
        <input type="Button"
            value="Add"
            onClick={() => this.setState({showAdd: !this.state.showAdd})} />
    );
  }

  renderUserRow(user, key) {
    return (
      <tr className="d-user-row" key={key}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.role}</td>
        <td>{this.renderActionButtons(user)}</td>
      </tr>
    );
  }

  renderActionButtons(user) {
    const { userContext: { id } } = this.props;

    const buttons = [];
    buttons.push(
      <span>
          <input type="Button"
            value="Show Reviews"
            onClick={() => this.props.actions.showUserReviews(user.id)} />
        </span>
    );
    
    if (Number(id) !== user.id) {
      buttons.push((
        <span>
          <input type="Button"
            value="Remove"
            onClick={() => this.props.actions.removeUser(user.id)} />
        </span>
      ));
    }

    return (
      <div>
        {buttons}
      </div>
      );
  }

  renderUsers() {
    const { users } = this.props;
    const usersRows = [];
    let key = 1;
    users.forEach(user => {
      usersRows.push(this.renderUserRow(user, key++));
    })
    return (
      <table className="d-user-table">
        <tbody>
          <tr key={0} className="d-user-row">
            <th>User ID</th>
            <th>Name</th>
            <th>Role</th>
            <th />
          </tr>
          {usersRows}
          </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <div className="d-admin-view">{`Administrator View`}</div>
        <div className="d-user-title">
          <span>Users List</span>
          <span className="d-add-user-button">
            {this.renderAddUserButton()}
          </span>
        </div>
        {this.renderAddUserForm()}
        {this.renderUsers()}
      </div>
    );
  }
}
