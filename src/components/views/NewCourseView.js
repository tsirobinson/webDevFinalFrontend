import { Link } from "react-router-dom";

const NewCourseView = (props) => {
  const {handleChange, handleSubmit } = props;
  let {course, addCourse} = props;

  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            New Course
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
          
          <button type="submit" onClick={() => addCourse(course)}>Submit</button>
          <br/>
          <br/>
        </form>
        </div>
        <Link to={'/instructors'} >
            <p>Back</p>
        </Link>
      </div>
    
  )
}

export default NewCourseView;