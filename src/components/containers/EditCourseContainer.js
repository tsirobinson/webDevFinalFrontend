import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourseThunk, editCourseThunk } from "../../store/thunks";
import { EditCourseView } from "../views";

class EditCourseContainer extends Component {
    componentDidMount() {
        //getting course ID from url
        this.props.fetchCourse(this.props.match.params.id);
    }

    render () {
        return (
            <EditCourseView
                course={this.props.course}
                editCourse={this.props.editCourse}
            />
        );
    }
};

// map state to props
const mapState = (state) => {
    return {
      course: state.course,
    };
  };

// map dispatch to props
const mapDispatch = (dispatch) => {
    return {
      fetchCourse: (id) => dispatch(fetchCourseThunk(id)),
      editCourse: (courseId) => dispatch(editCourseThunk(courseId)),
    };
  };

  export default connect(mapState, mapDispatch)(EditCourseContainer);