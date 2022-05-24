//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//import { deleteInstructor } from "../../store/actions/actionCreators";

const AllInstructorsView = (props) => {
  let {instructors, deleteInstructor} = props;
  if (!instructors.length) {
    return (
    <div>
      <p>There are no instructors.</p>
      <Link to={`/newinstructor`}>
        <button>Add New Instructor</button>
      </Link>
      </div>
    
    );
    
  }

  return (
    <div>
      {instructors.map((instructor) => {
        let name = instructor.firstname + " " + instructor.lastname;
        return (
          <div key={instructor.id}>
          <Link to={`/instructor/${instructor.id}`}>
            <h1>{name}</h1>
          </Link>
          <img src={instructor.imageUrl} alt="new"/>
          <p>{instructor.department}</p>
          <button onClick={() => deleteInstructor(instructor.id)}>X</button>
        </div>
        );

      })}

      <Link to={`/newinstructor`}>
        <button>Add New Instructor</button>
      </Link>
      <Link to={`/`}>
        <p>Home</p>
      </Link>
    </div>
  );
};

/*
AllInstructorsView.propTypes = {
  allInstructors: PropTypes.array.isRequired,
};*/

export default AllInstructorsView;