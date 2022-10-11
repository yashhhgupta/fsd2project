import './App.css';
import Navb from './Components/Navb';
// import SquareCard from './Components/UI/SquareCard';
import CourseCards from './Components/CourseCards';
import Signup from './Components/Signup';
import Login from './Components/Login';
import MyCourseCards from './Components/MyCourseCards';
function App() {
  const courses = [
    {
      title: "Course 1",
      text: "This is the first course",
    },
    {
      title: "Course 2",
      text: "This is the second course",
    },
    {
      title: "Course 3",
      text: "This is the third course",
    },
    {
      title: "Course 4",
      text: "This is the forth course",
    },
    {
      title: "Course 5",
      text: "This is the fivth course",
    },
    {
      title: "Course 6",
      text: "This is the fivth course",
    },
  ];
  const myCourses = [
    {
      title: "Course 1",
      text: "This is the first course",
      progress: 50,
    },
    {
      title: "Course 2",
      text: "This is the second course",
      progress: 10,
    },
    {
      title: "Course 3",
      text: "This is the third course",
      progress: 90,
    },
  ];
  return (
    <>
      <Navb></Navb>
      {/* <Login></Login> */}
      {/* <Signup></Signup>
       */}
      <div>
        <h1>My Courses</h1>
        <MyCourseCards items={myCourses}></MyCourseCards>
      </div>
      <div>
        <h1>All Courses</h1>
        <CourseCards items={courses}></CourseCards>
      </div>
    </>
  );
}

export default App;
