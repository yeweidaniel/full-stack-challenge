import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/employeesContainer.css';
import { store } from '../index.js';

const mapStateToProps = (state) => ({
  data: state.data
});

class Employee extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = this.initialState;
  }

  initialState = {
    newFeedbacks: []
  };

  componentWillMount() {
    const { params: { id } } = this.props;
    store.actions.usersActions.getPendingFeedbacks(Number(id));
  }

  feedbackChanged(event, target) {
    const { newFeedbacks } = this.state;
    const { params: { id } } = this.props;

    const updatedFeedbacks = { ...newFeedbacks };
    updatedFeedbacks.push({
      target,
      content: event.target.value,
      author: id,
      date: new Date()
    });

    this.setState({
      newFeedbacks: updatedFeedbacks
    });
  }

  submitFeedback() {

  }

  renderPendingFeedbacks() {
    const { pendingFeedbacks } = this.props.data;
    const views = pendingFeedbacks.map(target => {
      return (
        <div className="d-pending-feedback">
          <div>{`Please provide feedback for user ${target}`}</div>
          <textarea className="d-textarea" rows="4" cols="50" onChange={(e) => this.feedbackChanged(e, target)} />
          <input className="d-submit-button"
              type="button" id="Submit" value="Submit"
              onClick={this.submitFeedback.bind(this)} />
        </div>
      );
    });

    return views;
  }

  render() {
    const { data: { showReviewsFor } } = this.props;
    return (
      <div>
        <div className="d-admin-view">{`Employee View`}</div>
        <div className="d-user-title">
          <span>{`Welcome user ${showReviewsFor}, please provide feedback for the following users:`}</span>
        </div>
        <div className="d-feedbacks">
          {this.renderPendingFeedbacks()}
        </div>
      </div>
    );
  }
}

const EmployeeContainer = connect(mapStateToProps)(Employee);

export default EmployeeContainer;