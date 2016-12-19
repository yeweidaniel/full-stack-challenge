function initialize() {
	return {
		users: [],
		showReviewsFor: undefined,
		reviews: [],
		pendingFeedbacks:[],
		showFeedbacksFor: undefined,
		userContext: {
			id: undefined
		}
	};
}

const initialState = initialize();

const handlers = {};

function data(state = initialState, action) {
	const {type} = action;
	if (!handlers[type]) {
		return state;
	}
	return handlers[type](state, action);
}

handlers["LOGOUT"] = (state) => {
	return {
		...state,
		userContext: {
			id: undefined
		}
	};
}

handlers["LOGIN_SUCCESS"] = (state, { id }) => {
	return {
		...state,
		userContext: {
			id
		}
	};
};

handlers["REMOVE_ASSIGNEE"] = (state, { reviewId, assignee }) => {
	const newState = {...state};
	const affectedReview = newState.reviews.findIndex(r => r.id === reviewId);
	const indexToRemove = newState.reviews[affectedReview].assignees.indexOf(assignee);
	newState.reviews[affectedReview].assignees.splice(indexToRemove, 1);

	return newState;
};

handlers["ADD_ASSIGNEE"] = (state, { reviewId, assignee }) => {
	const newState = {...state};
	const affectedReview = newState.reviews.findIndex(r => r.id === reviewId);

	if (newState.reviews[affectedReview].assignees.indexOf(Number(assignee)) < 0) {
		newState.reviews[affectedReview].assignees.push(Number(assignee));
	}

	return newState;
};

handlers["REMOVE_USER"] = (state, { id }) => {
	const newState = {...state};
	const index = newState.users.findIndex(u => u.id === id);
	if (index >= 0) {
		newState.users.splice(index, 1);
	}
	return newState;
};

handlers["ADD_USER"] = (state, { name, email, password, role }) => {
	const newState = {...state};
	const newId = Math.max.apply(Math, (state.users.map(a=>a.id))) + 1;
	newState.users.push({
		id: newId,
		name, email, password, role
	})
	return newState;
};

handlers["SHOW_USER_REVIEWS"] = (state, { id }) => {
	return {
		...state,
		showReviewsFor: id
	}
};

handlers['USERS_RETRIEVED'] = (state, { users }) => {
	return {
		...state,
		users: users
	};
};

handlers['REVIEWS_RETRIEVED'] = (state, { reviews }) => {
	return {
		...state,
		reviews: reviews
	};
};

handlers['PENDING_FEEDBACKS_RECEIVED'] = (state, { pendingFeedbacks, userId }) => {
	return {
		...state,
		showReviewsFor: userId,
		pendingFeedbacks
	};
};

export default data
