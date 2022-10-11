import './App.css';
import Navb from './Components/Navb';
// import SquareCard from './Components/UI/SquareCard';
import CourseCards from './Components/CourseCards';
import Signup from './Components/Signup';
import Login from './Components/Login';
import SimpleCarousel from './Components/UI/SimpleCarousel';
function App() {
  const courses = [
    {
      title: "Course 1",
      text: "This is the first course",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      progress: 0,
    },
    {
      title: "Course 2",
      text: "This is the second course",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      progress: 0,
    },
    {
      title: "Course 3",
      text: "This is the third course",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
      progress: 0,
    },
    {
      title: "Course 4",
      text: "This is the forth course",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      progress: 0,
    },
    {
      title: "Course 5",
      text: "This is the fivth course",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      progress: 0,
    },
    {
      title: "Course 6",
      text: "This is the fivth course",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      progress: 0,
    },
  ];
  const myCourses = [
    {
      title: "Course 1",
      text: "This is the first course",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      progress: 50,
    },
    {
      title: "Course 2",
      text: "This is the second course",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      progress: 10,
    },
    {
      title: "Course 3",
      text: "This is the third course",
      details:
        "Lorem ",
      progress: 90,
    },
  ];
  return (
    <>
      <Navb></Navb>
      <SimpleCarousel></SimpleCarousel>

      {/* <Login></Login>
      <Signup></Signup> */}
      <div>
        <h1>My Courses</h1>
        <CourseCards items={myCourses}></CourseCards>
      </div>
        <div>
          <h1>All Courses</h1>
          <CourseCards items={courses}></CourseCards>
        </div>
    </>
  );
}

export default App;
