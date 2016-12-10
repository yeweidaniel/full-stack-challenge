import React, { Component } from 'react';
import '../styles/loginComponent.css';
import { connect } from 'react-redux';

@connect(state => ({
  users: state.users
}))
export default class AdminComponent extends Component {
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
  }

  render() {
    return (
      <div>
        {this.renderUsers()}
      </div>
    );
  }
}
