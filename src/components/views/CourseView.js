import { Link } from "react-router-dom";

const CourseView = (props) => {
  const { course } = props;

  if(!course.instructor){
    return (
      <div>
        <h1>{course.title}</h1>
        <h3>Staff</h3>
        <h3>{course.timeslot}</h3>
        <h3>{course.location}</h3>
      </div>
    );
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <Link to={`/instructor/${course.instructor.id}`}>
        <h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3>
      </Link>
      <h3>Timeslot: {course.timeslot}</h3>
      <h3>Location: {course.location}</h3>
    </div>
  );

};

export default CourseView;