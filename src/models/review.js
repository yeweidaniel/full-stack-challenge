import { PropTypes } from 'react';
import Feedback from ' ./feedback';

export default class Review {
	static propShape = {
		id: PropTypes.number,
		author: PropTypes.number,
		feedbacks: PropTypes.arrayOf(PropTypes.shape({...Feedback.propShape}))
		text: PropTypes.string,
		createdDate: PropTypes.date,
		assigneeEmployeeIDs: PropTypes.array,
		payee: PropTypes.number
	};

	constructor(...props) {
		Object.assign(this, ...props);
	}
}
