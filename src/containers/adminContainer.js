import React, { Component } from 'react';
import '../styles/adminContainer.css';
import { connect } from 'react-redux';
import { store } from '../index.js';
import Users from '../components/usersComponent.js';
import Reviews from '../components/reviewsComponent.js';

const mapStateToProps = (state) => ({
  data: state.data
});

class Admin extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  removeUser(id) {
    store.actions.usersActions.removeUser(id);
  }

  showUserReviews(id) {
    store.actions.usersActions.showUserReviews(id);
  }

  removeAssignee(reviewId, assignee) {
    store.actions.usersActions.removeAssignee(reviewId, assignee);
  }

  addNewUser(name, email, password, role) {
    store.actions.usersActions.addUser(name, email, password, role);
  }

  addAssignee(reviewId, assignee) {
    if (!reviewId || !assignee) {
      return;
    }

    store.actions.usersActions.addAssignee(reviewId, assignee);
  }

  getActions() {
    return {
      removeUser: this.removeUser,
      showUserReviews: this.showUserReviews,
      addUser: this.addNewUser
    };
  }

  getReviewActions() {
    return {
      removeAssignee: this.removeAssignee,
      addAssignee: this.addAssignee
    };
  }

  render() {
    const { data: { users, userContext } } = this.props;
    return (
      <div>
        <Users 
          actions={this.getActions()}
          users={users}
          userContext={userContext} />
        <Reviews
          data={this.props.data} 
          actions={this.getReviewActions()} />
      </div>
    );
  }
}

const AdminContainer = connect(mapStateToProps)(Admin);

export default AdminContainer;
