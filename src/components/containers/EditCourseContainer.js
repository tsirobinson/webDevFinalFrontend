import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { fetchCourseThunk, editCourseThunk } from "../../store/thunks";
import { EditCourseView } from "../views";

class EditCourseContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "", 
      timeslot: "",
      location: "", 
      instructorId: null, 
      redirect: false, 
      redirectId: null
    };
}
    componentDidMount() {
        console.log(this.props);
        //getting course ID from url
        this.props.fetchCourse(this.props.match.params.id);
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
      event.preventDefault();
      let course = {
        title: this.state.title,
        timeslot: this.state.timeslot,
        location: this.state.location,
        instructorId: this.state.instructorId
      }
      this.props.course.title = this.state.title
      this.props.course.timeslot = this.state.timeslot;
      this.props.course.location = this.state.location;
      this.props.course.instructorId = this.state.instructorId;

      let updatedCourse = await this.props.editCourse(this.props.course);
      
      this.setState({
        title: course.title,
        timeslot: course.timeslot,
        location: course.location,
        instructorId: course.instructorId,
        redirect: true, 
        redirectId: course.id
      });
    }

    render () {
      if(this.state.redirect) {
        return (<Redirect to={`/course/${this.state.redirectId}`}/>)
      }
        return (
          
            <EditCourseView
                handleChange = {this.handleChange} 
                handleSubmit={this.handleSubmit} 
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
      editCourse: (course) => dispatch(editCourseThunk(course)),
    };
  };

  export default connect(mapState, mapDispatch)(EditCourseContainer);