import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInstructorThunk, editInstructorThunk } from "../../store/thunks";
import { EditInstructorView } from "../views";

class EditInstructorContainer extends Component {
    componentDidMount() {
        //getting course ID from url
        this.props.fetchInstructor(this.props.match.params.id);
    }

    render () {
        return (
            <EditInstructorView
                instructor={this.props.instructor}
                editInstructor={this.props.editInstructor}
            />
        );
    }
};

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
      editInstructor: (instructor) => dispatch(editInstructorThunk(instructor)),
    };
  };

  export default connect(mapState, mapDispatch)(EditInstructorContainer);