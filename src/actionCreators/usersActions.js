// Handle API calls and action creation

export function removeUser(id) {
    return {
      type: "REMOVE_USER",
      id
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
