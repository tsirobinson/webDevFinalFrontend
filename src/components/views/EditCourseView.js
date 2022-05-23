import { Link } from "react-router-dom";

const EditCourseView = (props) => {
    let { course, editCourse } =  props;
    return (
        <div>
            <p>Update Course Information for {course.title}:</p>
            <form onSubmit={editCourse(course)}>
                <p>Title</p> 
                <input type="text" name="title"/>
                <p>Timeslot</p>
                <input type="text" name="timeslot"/>
                <p>Location</p>
                <input type="text" name="location"/>
                <p>Instructor ID</p>
                <input type="number" name="instructorId"/>
                <button type="submit">Save</button>
            </form>
            <Link to={`/course/${course.id}`}>
                <p>Back</p>
            </Link>
        </div>
    );
}

export default EditCourseView;