import { Component } from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";

import { 
  fetchAllInstructorsThunk,
  deleteInstructorThunk 
} from "../../store/thunks";

import AllInstructorsView from '../views/AllInstructorsView';

class AllInstructorsContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllInstructors();
  }

  render() {
    return (
      <div>
        <AllInstructorsView
          instructors={this.props.allInstructors}
          deleteInstructor={this.props.deleteInstructor}
        />
      </div>
    )
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allInstructors: state.allInstructors,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllInstructors: () => dispatch(fetchAllInstructorsThunk()),
    deleteInstructor: (instructorId) => dispatch(deleteInstructorThunk(instructorId)),
  };
};

/*
// Type check props;
AllInstructorsContainer.propTypes = {
  allInstructors: PropTypes.array.isRequired,
  fetchAllInstructors: PropTypes.func.isRequired,
};*/

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllInstructorsContainer);