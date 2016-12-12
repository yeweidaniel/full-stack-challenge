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
