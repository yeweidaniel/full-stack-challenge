// import { CALL_API } from 'redux-api-middleware';
import request from 'superagent'

export function removeUser(id) {
    return {
      type: "REMOVE_USER",
      id
    };
}

export function addUser(name, email, password, role) {
  return {
    type: "ADD_USER",
    name,
    email,
    password,
    role
  };
}

export function showUserReviews(id) {
    return {
      type: "SHOW_USER_REVIEWS",
      id
    };
  }

export function removeAssignee(reviewId, assignee) {
  return {
    type: "REMOVE_ASSIGNEE",
    reviewId,
    assignee
  }
}

export function addAssignee(reviewId, assignee) {
  return {
    type: "ADD_ASSIGNEE",
    reviewId,
    assignee
  }
}

export function getUsers() {
  return (dispatch) => {
    request
      .get('http://localhost:8080/api/v1/users')
      .end((err, res) => {
        if (err) {
          //do error handling
          return;
        }

        const payload = JSON.parse(res.text);
        dispatch({
          type: 'USERS_RETRIEVED',
          users: payload.users
        });
      }
    )
  }
}

export function getPendingFeedbacks(userId) {
  return (dispatch) => {
    request
      .get(`http://localhost:8080/api/v1/users/${userId}/pendingFeedbacks`)
      .end((err, res) => {
        if (err) {
          //do error handling
          return;
        }

        const payload = JSON.parse(res.text);
        dispatch({
          type: 'PENDING_FEEDBACKS_RECEIVED',
          pendingFeedbacks: payload.pendingFeedbacks,
          userId
        });
      }
    )
  }

}

export function getReviews() {
  return (dispatch) => {
    request
      .get(`http://localhost:8080/api/v1/reviews`)
      .end((err, res) => {
        if (err) {
          //do error handling
          return;
        }

        const payload = JSON.parse(res.text);
        dispatch({
          type: 'REVIEWS_RETRIEVED',
          reviews: payload.reviews
        });
      }
    )
  }
}