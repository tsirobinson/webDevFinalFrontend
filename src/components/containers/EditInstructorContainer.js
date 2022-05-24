import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { fetchCourseThunk, editInstructorThunk } from "../../store/thunks";
import { EditInstructorView } from "../views";

class EditInstructorContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: "", 
      lastname: "",
      department: "", 
      imageUrl: "", 
      redirect: false, 
      redirectId: null
    };
}
    // componentDidMount() {
    //     console.log(this.props);
    //     //getting course ID from url
    //     this.props.fetchCourse(this.props.match.params.id);
    // }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
      event.preventDefault();
      let instructor = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        department: this.state.department,
        imageUrl: this.state.imageUrl
      };
      this.props.instructor.firstname = this.state.firstname;
      this.props.instructor.lastname = this.state.lastname;
      this.props.instructor.department = this.state.department;
      this.props.instructor.imageUrl = this.state.imageUrl;

      await this.props.editInstructor(this.props.instructor);
      
      this.setState({
        firstname: "",
        // instructor.firstname,
        lastname: "",
        // instructor.lastname,
        department: "",
        // instructor.department,
        imageUrl: "",
        // instructor.imageUrl,
        redirect: true, 
        redirectId: instructor.id
      });
    }

    render () {
      if(this.state.redirect) {
        return (<Redirect to={`/instructor/${this.state.redirectId}`}/>)
      }
        return (
          
            <EditInstructorView
                handleChange = {this.handleChange} 
                handleSubmit={this.handleSubmit} 
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
      fetchCourse: (id) => dispatch(fetchCourseThunk(id)),
      editInstructor: (instructor) => dispatch(editInstructorThunk(instructor)),
    };
  };

  export default connect(mapState, mapDispatch)(EditInstructorContainer);