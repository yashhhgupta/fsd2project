import CourseCards from "./CourseCards";
import SimpleCarousel from "./UI/SimpleCarousel";
import Footer from "./UI/Footer";
import { useLocation } from "react-router-dom";
import { useState,useContext } from "react";
import { CoursesContext } from "./Courses";
const Home = (props) => {
  const port = useContext(CoursesContext);
  // console.log(port.courses);
  const location = useLocation();
  const [courses, setCourses] = useState(port.courses);

  const registerCourseHandler = (title) => {
    setCourses(
      courses.map((course) => {
        if (course.title === title) {
          course.progress = 0;
        }
        return course;
      })
    );
  };

  if (location.state) {
    courses.push(location.state);
  }
  let myCourses = courses.filter((course) => {
    return course.progress !== undefined;
  });
  let restCourses = courses.filter((course) => {
    return course.progress === undefined;
  });
  // console.log(courses);
  return (
    <>
      {/* <Navb></Navb> */}
      <SimpleCarousel></SimpleCarousel>
      <div>
        <h1>My Courses</h1>
        <CourseCards
          items={myCourses}
          setc={registerCourseHandler}
        ></CourseCards>
      </div>
      <div>
        <h1>All Courses</h1>
        <CourseCards
          items={restCourses}
          setc={registerCourseHandler}
        ></CourseCards>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Home;
