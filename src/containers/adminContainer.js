import React, { Component } from 'react';
import '../styles/adminContainer.css';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  users: state.users.users
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

  renderUsers() {
    const { users } = this.props;
    const usersUI = [];
    if (users) {
      users.forEach(user => {
        usersUI.push(
          <div className="d-user-row">
            <span className="d-user-info">{user.id}</span>
            <span className="d-user-info">{user.name}</span>
            <span className="d-user-info">{user.role}</span>
          </div>
        );
      });
    }

    return usersUI;
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

const AdminContainer = connect(mapStateToProps)(Admin);

export default AdminContainer;
