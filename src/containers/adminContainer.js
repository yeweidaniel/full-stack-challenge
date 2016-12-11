import React, { Component } from 'react';
import '../styles/adminContainer.css';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  users: state.users.users
});

const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => {
    dispatch({type: "REMOVE_USER", payload: id})
  }
});

class Admin extends Component {
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
        <td>{this.renderRemoveUserButton(user)}</td>
      </tr>
    );
  }

  removeUser(id) {
    this.props.dispatch({
      type: "REMOVE_USER",
      payload: id
    });
  }

  renderRemoveUserButton(user) {
    return (
      <input type="Button"
        value="Remove"
        onClick={() => this.removeUser(user.id)} />
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
      <div className="d-user-title">Users List</div>
        {this.renderUsers()}
      </div>
    );
  }
}

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer;
