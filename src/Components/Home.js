import CourseCards from "./CourseCards";
import SimpleCarousel from "./UI/SimpleCarousel";
import Footer from "./UI/Footer";
import { useLocation } from "react-router-dom";
import {useState} from 'react';
const Home = (props) => {

  
  const location = useLocation();
  
  console.log(location.state);
  const courses = [
    {
      title: "Course 1",
      text: "This is the first course",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      title: "Course 2",
      text: "This is the second course",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      progress: 0,
    },
    {
      title: "Course 3",
      text: "This is the third course",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
    },
    {
      title: "Course 4",
      text: "This is the forth course",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      progress: 90,
    },
    {
      title: "Course 5",
      text: "This is the fivth course",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    },
    {
      title: "Course 6",
      text: "This is the fivth course",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      progress: 30,
    },
  ];   
  if(location.state){
  courses.push(location.state);
  }
  let myCourses = courses.filter((course) => { return course.progress!=null });
  let restCourses = courses.filter((course) => { return course.progress==null})
  
  
  
  return (
    <>
      {/* <Navb></Navb> */}
      <SimpleCarousel></SimpleCarousel>
      <div>
        <h1>My Courses</h1>
        <CourseCards items={myCourses}></CourseCards>
      </div>
      <div>
        <h1>All Courses</h1>
        <CourseCards items={restCourses}></CourseCards>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Home;
