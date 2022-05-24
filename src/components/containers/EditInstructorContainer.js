import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditInstructorView from '../views/NewInstructorView';
import { editInstructorThunk } from '../../store/thunks';


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
    //   console.log(this.props);
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
            timeslot: this.state.lastname,
            department: this.state.department,
            imageUrl: this.state.imageUrl
        };
        
        let newInstructor = await this.props.editInstructor(instructor.data);

        this.setState({
          firstname: "",
          lastname: "",
          department: "",
          imageUrl: null, 
          redirect: true, 
          redirectId: newInstructor.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
      //go to single instructor view of newly created instructor
        if(this.state.redirect) {
          return (<Redirect to={`/instructor/${this.state.redirectId}`}/>)
        }
        return (
          <EditInstructorView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        editInstructor: (instructor) => dispatch(editInstructorThunk(instructor)),
    })
}

export default connect(null, mapDispatch)(EditInstructorContainer);