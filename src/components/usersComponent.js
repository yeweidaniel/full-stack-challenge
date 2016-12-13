import React, { Component } from 'react';
import '../styles/adminContainer.css';

export default class Users extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  onAddUserClick() {
  }

  renderAddUserButton() {
    return (
      <div>
        <input type="button"
          value="Add User"
          onClick={e => this.onAddUserClick(e)} />
      </div>
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
    return (
      <div>
        <span>
          <input type="Button"
            value="Remove"
            onClick={() => this.props.actions.removeUser(user.id)} />
        </span>
        <span>
          <input type="Button"
            value="Show Reviews"
            onClick={() => this.props.actions.showUserReviews(user.id)} />
        </span>
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
      <div className="d-user-title">Users List</div>
        {this.renderUsers()}
      </div>
    );
  }
}
