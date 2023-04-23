import Footer from "../UI/Footer";
import Navb from "../UI/Navb";
import React from 'react';
import bootstrap from 'bootstrap';
import classes from "./SingleCourse.module.css";
import { useState,useContext,useEffect } from 'react';
import Feedback from "../Feedback/Feedback.js";
import GetFeedback from "../Feedback/GetFeedback";
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import {useNavigate} from 'react-router-dom';
// import { Player } from 'video-react';

const SingleCourse = (props) => {
  const navigate = useNavigate();
  const [update, setUpdate] = useState(false);
    const {id}= useParams();
    // console.log(id);
    let k  = 1;

    const [courseToShow,setCourseToShow] = useState([]); 
    useEffect(() => {
      const fetchitems = () => {
        // console.log(id);
        fetch("http://localhost:3001/courses/" + id)
          .then((response) => response.json())
          .then((data) => {
            setCourseToShow(data.course);
            // console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
        // const data = response.json();
      };
      fetchitems();
    }, [id]);
    const [reCourses, setReCourses] = useState([]);
    // console.log("courseid: ",courseid)
    useEffect(() => {
      const fetchitems = () => {
        // fetch("http://localhost:3001/feedbacks")
        fetch(`http://localhost:3001/feedbacks?courseid=${id}`)
          .then((response) => response.json())
          .then((data) => {
            setReCourses(data.feedback);
            // console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
        // const data = response.json();
      };
      fetchitems();
    }, [update,id]);
    console.log(courseToShow.contentLinks)

    // console.log("course to show", courseToShow);
  // console.log(id);
    // const {image , title , creator,description, contentList} = props.course;
    const [show , setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    // console.log(update);
    const feedbackHandler = (feedback) => {
      setUpdate(!update);
    }
    const buttonClickHandler = () => {
      navigate(`/quiz/${id}`);
    }
    // console.log(courseToShow);
    return (
      <>
        <Navb />

        <div className={classes.main}>
          <div className={classes.course}>
            <div className={classes.description}>
              <p className={classes.title}>{courseToShow.title}</p>
              <p className={classes.te}>{courseToShow.text}</p>
              <p className={classes.desc}>{courseToShow.description}</p>
              <p className={classes.creator}>
                Content Creator : {courseToShow.creator}
              </p>
              <p>Ratings : {courseToShow.rating}/5</p>
            </div>
            <div className={classes.course__image}>
              <img src={courseToShow.imageURL} alt="course" height="200" />
            </div>
          </div>
          <div className={classes.course__content}>
            {/* <source src="/Videos/video1.mp4" type="video/mp4"/> */}
            <button onClick={handleShow} className={classes.button}>Show Content</button>

            {show && (
              <div>
                <iframe
                  width="560"
                  height="315"
                  src={courseToShow.contentLinks}
                  title="Youtube Player"
                  frameborder="0"
                  allowFullScreen
                />
              </div>
            )}

            {show && (
              <Table striped bordered hover style={{ marginTop: "3em" }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Content</th>
                  </tr>
                </thead>
                <tbody>
                  {courseToShow.contentList.map((content) => {
                    return (
                      <tr>
                        <td>{k++}</td>
                        <th>{content}</th>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            )}
          </div>
          <button className={classes.button} onClick={buttonClickHandler}>Take Quiz</button>
          <button className={classes.button}>Feedbacks</button>
          <div className={classes.reviews}>
            <Feedback courseid={id} reCourses={reCourses} />
            <GetFeedback id={id} setc={feedbackHandler} />
          </div>
        </div>
        <Footer />
      </>
    );
}
export default SingleCourse;