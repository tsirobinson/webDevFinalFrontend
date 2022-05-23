import { Link } from "react-router-dom";

const EditInstructorView = (props) => {
    let { instructor, editInstructor } =  props;
    let name = instructor.firstname + " " + instructor.lastname;
    return (
        <div>
            <p>Update Information for {name}:</p>
            <form onSubmit={editInstructor(instructor)}>
                <p>First Name</p> 
                <input type="text" name="firstname"/>
                <p>Last Name</p>
                <input type="text" name="lastname"/>
                <p>Department</p>
                <input type="text" name="department"/>
                <p>Image URL</p>
                <input type="text" name="imageUrl"/>
                <button type="submit">Save</button>
            </form>
            <Link to={`/instructor/${instructor.id}`}>
                <p>Back</p>
            </Link>
        </div>
    );
}

export default EditInstructorView;