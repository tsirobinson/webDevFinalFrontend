const CourseView = (props) => {
  const { course } = props;

  if(!course.instructor){
    return (
      <div>
        <h1>{course.title}</h1>
        <h3>Staff</h3>
      </div>
    );
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <h3>{course.instructor.firstname + " " + course.instructor.lastname}</h3>
    </div>
  );

};

export default CourseView;