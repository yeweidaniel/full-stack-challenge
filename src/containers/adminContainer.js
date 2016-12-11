import React, { Component } from 'react';
import '../styles/adminContainer.css';
import { connect } from 'react-redux';
import { store } from '../index.js';

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

  removeUser(id) {
    store.dispatch({
      type: "REMOVE_USER",
      payload: id
    });
  }

  showUserReviews(id) {
    store.dispatch({
      type: "SHOW_USER_REVIEWS",
      id
    });
  }

  renderActionButtons(user) {
    return (
      <div>
        <span>
          <input type="Button"
            value="Remove"
            onClick={() => this.removeUser(user.id)} />
        </span>
        <span>
          <input type="Button"
            value="Show Reviews"
            onClick={() => this.showUserReviews(user.id)} />
        </span>
      </div>
      );
  }

  renderReviews() {
    const { data: { users, reviews, showReviewsFor } } = this.props;

    if (!showReviewsFor) {
      return null;
    }

    const title = "Showing Reviews For User " + showReviewsFor;

    return (
      <div className="d-user-title">{title}</div>
      );
  }

  renderUsers() {
    const { users } = this.props.data;
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
      <div className="d-admin-view">Administrator View</div>
      <div className="d-user-title">Users List</div>
        {this.renderUsers()}
        {this.renderReviews()}
      </div>
    );
  }
}

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer;
