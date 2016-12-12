import React, { Component } from 'react';
import '../styles/adminContainer.css';

export default class Reviews extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  renderReview(review) {
    const { users } = this.props.data;
    const assigneesView = review.assignees.map(assignee => {
      const index = users.findIndex(a => a.id === assignee);
      return (
        <div>{"(" + users[index].id + ") " + users[index].name}</div>
        );
    });

    return (
      <tr>
        <td>{review.date}</td>
        <td>{review.author}</td>
        <td>{review.text}</td>
        <td>
          {assigneesView}
        </td>
      </tr>
      );
  }

  render() {
    const { data: {reviews, showReviewsFor} } = this.props;

    if (!showReviewsFor) {
      return null;
    }

    const title = "Showing Reviews For User " + showReviewsFor;
    const filteredReviews = reviews.filter(review => review.payee === showReviewsFor);
    const reviewedDisplays = filteredReviews.map(review => this.renderReview(review));

    return (
      <div>
        <div className="d-user-title">{title}</div>
        <div>
          <table className="d-user-table">
            <tbody>
              <tr key={0} className="d-user-row">
                <th>Date</th>
                <th>Author</th>
                <th>Content</th>
                <th>Assignees</th>
              </tr>
              {reviewedDisplays}
              </tbody>
          </table>
        </div>
      </div>
      );
  }
}
