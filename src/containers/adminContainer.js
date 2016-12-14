import React, { Component } from 'react';
import '../styles/adminContainer.css';
import { connect } from 'react-redux';
import { store } from '../index.js';
import Users from '../components/usersComponent.js';
import Reviews from '../components/reviewsComponent.js';

const mapStateToProps = (state) => ({
  data: state.data
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

  removeUser(id) {
    store.actions.usersActions.removeUser(id);
  }

  showUserReviews(id) {
    store.actions.usersActions.showUserReviews(id);
  }

  removeAssignee(reviewId, assignee) {
    store.actions.usersActions.removeAssignee(reviewId, assignee);
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
      showUserReviews: this.showUserReviews
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

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer;
