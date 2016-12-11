function initialize() {
	return {
		users: [
			{id: 1, name: 'admin1', role: 'Admin'},
			{id: 2, name: 'employee1', role: 'Employee'},
			{id: 3, name: 'employee2', role: 'Employee'}

		]
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

handlers["REMOVE_USER"] = (state, {payload}) => {
	const newState = {...state};
	const index = newState.users.findIndex(u => u.id === payload);
	if (index >= 0) {
		newState.users.splice(index, 1);
	}
	return newState;
};

handlers['USERS_RETRIEVED'] = (state, {payload}) => {
	return {
		...state,
		users: payload.users
	};
};

export default users
