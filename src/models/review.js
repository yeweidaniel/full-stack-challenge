import { PropTypes } from 'react';
import Feedback from ' ./feedback';
import Employee from ' ./employee';

export default class Review {
	static propShape = {
		id: PropTypes.number,
		author: PropTypes.number,
		feedbacks: PropTypes.arrayOf(PropTypes.shape({...Feedback.propShape}))
		text: PropTypes.string,
		createdDate: PropTypes.date,
		assignees: PropTypes.arrayOf(PropTypes.shape({...Employee.propShape}))
	};

	constructor(...props) {
		Object.assign(this, ...props);
	}
}