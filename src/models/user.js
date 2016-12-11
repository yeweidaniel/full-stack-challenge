import { PropTypes } from 'react';

export const Roles = {
	Admin: 'Admin',
	Employee: 'Employee'
}

export default class User {
	static propShape = {
		id: PropTypes.number,
		name: PropTypes.string,
		role: PropTypes.string,
	};

	constructor(...props) {
		Object.assign(this, ...props);
	}
}