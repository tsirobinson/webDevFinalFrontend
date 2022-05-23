import { Link } from "react-router-dom";

const InstructorView = (props) => {
  const {instructor, deleteInstructor} = props;
  let name = instructor.firstname + " " + instructor.lastname;
  if(instructor.courses.length) {
    return (
      <div>      
        <h1>{name}</h1>
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
      <button onClick={() => deleteInstructor(instructor.id)}>X</button>
      </div>
    );
  } else {
    return (
      <div>      
        <h1>{name}</h1>
        <p>{instructor.department}</p>
        <p>This instructor has no courses</p>
        <Link to={`/instructors`}>
          <button onClick={() => deleteInstructor(instructor.id)}>X</button>
        </Link>
      </div>
    );
  }

};

export default InstructorView;