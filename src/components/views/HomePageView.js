

import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to={'/instructors'} > All Instructors </Link>
      <h1> </h1>
      <Link to={'/courses'} > All Courses </Link>
      
    </div>
  );    
}




export default HomePageView;
