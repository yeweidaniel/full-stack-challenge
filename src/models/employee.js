import { PropTypes } from 'react';

export default class Employee {
	static propShape = {
		id: PropTypes.number,
		name: PropTypes.string,
		role: PropTypes.enum,
	};

	constructor(...props) {
		Object.assign(this, ...props);
	}
}