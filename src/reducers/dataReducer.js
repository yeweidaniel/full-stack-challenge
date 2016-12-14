function initialize() {
	return {
		users: [
			{id: 1, name: 'admin1', role: 'Admin'},
			{id: 2, name: 'employee1', role: 'Employee'},
			{id: 3, name: 'employee2', role: 'Employee'}
		],
		showReviewsFor: undefined,
		reviews: [
			{id: 1, author: 1, content: "you did a great job", assignees:[3], payee: 2, createdDate: "2016-12-03"}
		],
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

handlers["SHOW_USER_REVIEWS"] = (state, { id }) => {
	return {
		...state,
		showReviewsFor: id
	}
};

handlers['USERS_RETRIEVED'] = (state, {payload}) => {
	return {
		...state,
		users: payload.users
	};
};

export default data
