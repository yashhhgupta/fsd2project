import Footer from "../UI/Footer";
import Navb from "../UI/Navb";
import React from 'react';
import bootstrap from 'bootstrap';
import classes from "./SingleCourse.module.css";
import { useState,useContext } from 'react';
import Feedback from "../Feedback/Feedback.js";
import GetFeedback from "../Feedback/GetFeedback";
import { useParams } from "react-router-dom";
import { CoursesContext } from "./Courses";
// import { Player } from 'video-react';

const SingleCourse = (props) => {
    const port = useContext(CoursesContext);
    const {id}= useParams();
    const courseToShow = port.courses.filter((course)=>{
      return course.id === id;
    })
    console.log("course to show", courseToShow);
  console.log(id);
    const {image , title , creator,description, contentList} = props.course;
    const [show , setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    console.log(port.courses);
    return (
      <>
        <Navb />

        <div className={classes.main}>
          <div className={classes.course}>
            <div className={classes.course__image}>
              <img src={courseToShow[0].imageURL} alt="course" height="200" />
            </div>
            <div className={classes.description}>
              <p className={classes.title}>{courseToShow[0].title}</p>
              <p className={classes.desc}>{courseToShow[0].description}</p>
              <p className={classes.creator}>
                Content Creator : {courseToShow[0].creator}
              </p>
            </div>
          </div>
          <div className={classes.course__content}>
            {/* <source src="/Videos/video1.mp4" type="video/mp4"/> */}
            <button onClick={handleShow} className={classes.button}>
              Show Content
            </button>
            <button onClick="" className={classes.button}>
              Take Quiz
            </button>
            {show && (
              <ul>
                {courseToShow[0].contentList.map((content) => {
                  return <li className={classes.steps}>{content}</li>;
                })}
              </ul>
            )}
            
          </div>
          <Feedback />
        <GetFeedback course = "basketball" name = "Saathvika"/>
        </div>
        <Footer />
      </>
    );

}
export default SingleCourse;