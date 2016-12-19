import React, { Component, PropTypes } from 'react';
import '../styles/reviewsComponent.css';

export default class Reviews extends Component {
  static propTypes = {
    data: PropTypes.object,
    actions: PropTypes.object,
    showFeedbacks: PropTypes.bool
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedAssignee: undefined
    };
  }

  renderFeedbacks(review) {
    const feedbacks = review.feedbacks;
    if (!feedbacks) {
      return null;
    }

    const views = feedbacks.map(f => {
      const date = f.date ? f.date : 'unknown date';
      const author = f.author ? f.author : 'unknown author';
      return (
        <div className='d-feedback'>
          <span>{`On ${date}, ${author} wrote: ${f.content}`}</span>
        </div>
      );
    });
    return views;
  }

  renderReview(review) {
    const assigneesView = this.renderAssignees(review);

    return (
      <div className="d-review">
        <table className="d-review-table" key={review.id}>
          <tbody>
            <tr key="0">
              <td>Date</td>
              <td>{review.createdDate}</td>
            </tr>
            <tr key="1">
              <td>Author</td>
              <td>{review.author}</td>
            </tr>
            <tr key="2">
              <td>Content</td>
              <td>{review.content}</td>
            </tr>
            <tr key="3">
              <td>Assignees</td>
              <td>{assigneesView}</td>
            </tr>
          </tbody>
        </table>
        <div className="d-feedbacks">
          <div className="d-feedback-title">Feedbacks:</div>
          {this.renderFeedbacks(review)}
        </div>
      </div>
      );
  }

  renderExistingAssignee(reviewId, assignee) {
    return (
      <div className="d-assignee" key={assignee}>
        <div className="d-assignee-name">{assignee}</div>
        <div className="d-remove-assignee" onClick={() => this.props.actions.removeAssignee(reviewId, assignee)}>Remove</div>
      </div>
      );
  }

  newAssigneeSelected(val) {
    this.setState({
      selectedAssignee: val.target.value
    });
  }

  renderAssignees(review) {
    const existingAssignees = review.assignees.map(assignee => this.renderExistingAssignee(review.id, assignee));
    const { data: { users } } = this.props;
    const remainingUsers = users.filter(a => review.assignees.indexOf(a) === -1);
    const options = remainingUsers.map((user, index) => (
      <option value={user.id} key={index}>{'User ' + user.id}</option>)
    );

    return (
      <div>
        {existingAssignees}
        <div>
          <select className="d-assignee-select" onChange={this.newAssigneeSelected.bind(this)}>
            <option value="" key="-1" />
            {options}
          </select>
          <input type="Button"
            value="Add Assignee"
            onClick={() => this.props.actions.addAssignee(review.id, this.state.selectedAssignee)} />
        </div>
      </div>
    );
  }

  render() {
    const { data: {reviews, showReviewsFor} } = this.props;

    if (!showReviewsFor) {
      return null;
    }

    const title = "Showing All Reviews For User " + showReviewsFor;
    const filteredReviews = reviews.filter(review => review.target === showReviewsFor);
    const reviewedDisplays = filteredReviews.map(review => this.renderReview(review));

    return (
      <div>
        <div className="d-user-title">{title}</div>
        <div>
          {reviewedDisplays}
        </div>
      </div>
      );
  }
}
