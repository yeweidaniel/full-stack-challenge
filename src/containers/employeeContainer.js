import React, { Component } from 'react';
import Reviews from '../components/reviewsComponent.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  data: state.data
});

class Employee extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Reviews
          data={this.props.data} 
          actions={this.getReviewActions()} />
      </div>
    );
  }
}

const EmployeeContainer = connect(mapStateToProps)(Employee);

export default EmployeeContainer;