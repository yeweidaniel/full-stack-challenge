import React, { Component } from 'react';
import '../styles/loginComponent.css';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  users: state.users.users
});

class Admin extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  renderUsers() {
    const { users } = this.props;
    const usersUI = [];
    if (users) {
      users.forEach(user => {
        usersUI.push(
          <div>
            <span>{user.id}</span>
            <span>{user.name}</span>
          </div>
        );
      });
    }

    return usersUI;
  }

  render() {
    return (
      <div>
        {this.renderUsers()}
      </div>
    );
  }
}

const AdminContainer = connect(mapStateToProps)(Admin);

export default AdminContainer;
