import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInstructorThunk, deleteInstructorThunk } from "../../store/thunks";

import { InstructorView } from "../views";

class InstructorContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    //getting instructor ID from url
    this.props.fetchInstructor(this.props.match.params.id);
  }

  render() {
    return (
      <InstructorView 
        instructor={this.props.instructor}
        deleteInstructor={this.props.deleteInstructor}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    instructor: state.instructor,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchInstructor: (id) => dispatch(fetchInstructorThunk(id)),
    deleteInstructor: (instructorId) => dispatch(deleteInstructorThunk(instructorId)),
  };
};

export default connect(mapState, mapDispatch)(InstructorContainer);