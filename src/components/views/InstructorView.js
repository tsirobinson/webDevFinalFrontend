import { Link } from "react-router-dom";

const InstructorView = (props) => {
  const {instructor, deleteInstructor} = props;
  let name = instructor.firstname + " " + instructor.lastname;
  if(instructor.courses.length) {
    return (
      <div>      
        <h1>{name}</h1>
        <img src={instructor.imageUrl} alt="new" className="photo"/>
        <p>{instructor.department}</p>
      {/*
        <ul>
        {instructor.courses.map( course => {
          return (

            <li key={course.id}>{course.title}</li>
          );
        })}
        </ul>
      */}
      <div>
        {instructor.courses.map((course) => {
          let title = course.title;
          return (
            <div key={course.id}>
              <Link to={`/course/${course.id}`}>
                <h1>{title}</h1>
              </Link>
              </div>
          )
        })}
        
      </div>
      <Link to={`/editinstructor/${instructor.id}`}>
        <button>Edit Instructor</button>
      </Link>
      <Link to={`/instructors`}>
          <button onClick={() => deleteInstructor(instructor.id)}>X</button>
        </Link>
        <Link to={'/instructors'} >
        <p>Back</p>
      </Link>
      </div>
    );
  } else {
    return (
      <div>      
        <h1>{name}</h1>
        <img src={instructor.imageUrl} alt="new" className="photo"/>
        <p>{instructor.department}</p>
        <p>This instructor has no courses</p>
        <Link to={`/editinstructor/${instructor.id}`}>
          <button>Edit Instructor</button>
        </Link>
        <Link to={`/instructors`}>
          <button onClick={() => deleteInstructor(instructor.id)}>X</button>
        </Link>
        <Link to={'/instructors'} >
        <p>Back</p>
      </Link>
      </div>
    );
  }

};

export default InstructorView;