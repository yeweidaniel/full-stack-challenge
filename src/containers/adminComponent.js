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

  render() {
    return (
      <div>
      
      </div>
    );
  }
}
