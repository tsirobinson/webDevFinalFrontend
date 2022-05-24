import { Link } from "react-router-dom";

const EditCourseView = (props) => {
    const {handleChange, handleSubmit } = props;
    let { course, editCourse } =  props;
    return (
        <div className="root">
        <div className="formContainer">
          <div className="formTitle">
            <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
              Update Information
            </h2>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Title: </label>
            <input type="text" name="title" onChange ={(e) => handleChange(e)} />
            <br/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Timeslot: </label>
            <input type="text" name="timeslot" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Location: </label>
            <input type="text" name="location" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>instructorId: </label>
            <input type="text" name="instructorId" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
            
            <button type="submit" onClick={() => editCourse(course)}>Submit</button>
            <br/>
            <br/>
          </form>
          </div>
        </div>
    );
}

export default EditCourseView;