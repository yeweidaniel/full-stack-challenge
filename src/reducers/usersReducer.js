function initialize() {
	return {
		users: [{id: 1, name: 'user1'}]
	};
}

const initialState = initialize();

const handlers = {};

function users(state = initialState, action) {
	const {type} = action;
	if (!handlers[type]) {
		return state;
	}
	return handlers[type](state, action);
}

handlers['USERS_RETRIEVED'] = (state, {payload}) => {
	return {
		...state,
		users: payload.users
	};
};

export default users
