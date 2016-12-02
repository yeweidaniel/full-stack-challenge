import { PropTypes } from 'react';

export default class Feedback {
	static propShape = {
		id: PropTypes.number,
		author: PropTypes.number,
		text: PropTypes.string,
		createdDate: PropTypes.date,
	};

	constructor(...props) {
		Object.assign(this, ...props);
	}
}