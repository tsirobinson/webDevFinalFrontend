# Tyler Robinson (tsirobinson) & Diana Luna (dianaluna01)
## Users can
- [X] Land on a visually pleasing homepage by default, which allows navigation to view all courses and all instructors
- [X] Can navigate to all instructors view, and
    - [X] See a list of all instructors in the database
    - [X] See an informative message if no instructors exist
    - [X] Add a new instructor
        - [ ] With a validated form displaying real-time error messages
- [X] Can navigate to a single instructor view, and
    - [X] See details about a single instructor, including courses they teach (if any) 
    - [X] See an informative message if no courses belong to that instructor
    - [X] Can navigate to single course view (see below)
    - [X] Delete the instructor 
    - [X] Edit instructor information (including adding/removing courses)
        - [X] With a validated form displaying real-time error messages
- [X] Can navigate to all courses view, and
    - [X] See a list of all courses in the database
    - [X] See an informative message if no courses exist
    - [X] Add a new course
        - [X] With a validated form displaying real-time error messages
- [X] Can navigate to a single course view, and
    - [X] See details about a single course, including the instructor
    - [X] Should display “Staff” if the course is not assigned an instructor
    - [X] Navigate to single instructor view of the course’s instructor
    - [X] Delete the course
    - [ ] Edit the course’s information (including instructor)
        - [ ] With a validated form displaying real-time error messages

## All Instructors and All Courses
### Database (Sequelize)
- [X] Write a 'instructors' model with the following information
    - [X] firstname
    - [X] lastname
    - [X] department
    - [X] imageUrl
- [X] Write a 'courses' model with the following information
    - [X] title
    - [X] timeslot
    - [X] location
- [X] Courses may be associated with at most one instructor
- [X] Instructors may be associated with many courses
### API (Express, Sequelize)
- [X] Write a route to serve up all courses
- [X] Write a route to serve up all instructors
### State Management (Redux)
- [X] Write a instructors sub-reducer to manage instructors in your Redux store
- [X] Write a courses sub-reducer to manage courses in your Redux store
### UI (React)
- [X] Write a component to display a list of all instructors (just their names and images)
- [X] Write a component to display a list of all courses (just their names)
### Client-Side Routing (React-Router)
- [X] Display the all-instructors component when the url matches '/instructors'
- [X] Display the all-courses component when the url matches '/courses'
- [X] Add links to the navbar that can be used to navigate to the all-instructors view and the all-courses view

## Single Course and Single Instructor
### API (Express, Sequelize)
- [X] Write a route to serve up a single instructor (based on their id), including that instructor’s courses
- [X] Write a route to serve up a single course (based on its id), including that course's instructor
### UI (React)
- [X] Write a component to display a single instructor with the following information
    - [X] The instructor's name, image, and department
    - [X] A list of all courses that instructor is assigned
- [X] Write a component to display a single course with the following information
    - [X] The course title, timeslot, and location
    - [X] The name of the instructor 
### Client-Side Routing (React-Router)
- [X] Display the appropriate instructor's info when the url matches '/instructors/:instructorId'
- [X] Clicking on a instructor from the all-instructors view should navigate to show that instructor in the single-instructor view
- [X] Display the appropriate course when the url matches '/courses/:courseId'
- [X] Clicking on a course from the all-courses view should navigate to show that course in the single-course view
- [X] Clicking on the name of a course in the single-instructor view should navigate to show that course in the single-course view
- [X] Clicking on the name of a instructor in the single-course view should navigate to show that instructor in the single-instructor view

## Editing an Instuctor and Editing a Course
### API (Express, Sequelize)
- [X] Write a route to edit a new instructor
- [X] Write a route to edit a new course
### UI (React)
- [X] Write a component to display a form for editing an instructor’s information
- [X] Display this component EITHER as part of the single-instructor view, or as its own view
- [X] Submitting the form should
    - [X] Make a request that causes the instructor to be updated in the database
    - [ ] Display the updates without needing to refresh the page
- [X] Write a component to display a form for editing a course
- [X] Display this component EITHER as part of the single-course view, or as its own view
- [ ] Submitting the form should
    - [ ] Make a request that causes the course to be updated in the database
    - [ ] Display the updates without needing to refresh the page

## Adding a Course and Adding an Instructor
### API (Express, Sequelize)
- [X] Write a route to add a new instructor
- [X] Write a route to add a new course
### UI (React)
- [X] Write a component to display a form for adding a new instructor that contains inputs for the firstname, lastname, department, and imageUrl
- [X] Display this component EITHER as part of the all-instructors view, or as its own view
- [X] Submitting the form with a valid name/department should
    - [X] Make a request that causes the new instructor to be persisted in the database
    - [X] Add the new instructor to the list of instructors without needing to refresh the page
- [X] Write a component to display a form for adding a new course that contains inputs for at least first name, last name and email
    - [X] Display this component EITHER as part of the all-courses view, or as its own view
    - [X] Submitting the form with a valid title, timeslot should
        - [X] Make a request that causes the new course to be persisted in the database
        - [X] Add the new course to the list of courses without needing to refresh the page

## Removing an Instructor and Removing a Course
### API (Express, Sequelize)
- [X] Write a route to remove an instructor (based on its id)
- [X] Write a route to remove a course (based on its id)
### UI (React)
- [X] In the all-instructors view, include an 'X' button next to each instructor
- [X] Clicking the 'X' button should
    - [X] Make a request that causes that instructor to be removed from database
    - [ ] Remove the instructor from the list of instructors without needing to refresh the page
- [X] In the all-courses view, include an 'X' button next to each instructor
- [X] Clicking the 'X' button should
    - [X] Make a request that causes that course to be removed from database
    - [X] Remove the course from the list of courses without needing to refresh the page
