import Footer from "../UI/Footer";
import Navb from "../UI/Navb";
import React from 'react';
import bootstrap from 'bootstrap';
import classes from "./SingleCourse.module.css";
import { useState } from 'react';
// import { Player } from 'video-react';

const SingleCourse = (props) => {
    const {image , title , creator,description, contentList} = props.course;
    const [show , setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    return(
      <>
        <Navb />
        <div className={classes.main}>
          <div className={classes.course}>
            <div className={classes.course__image}>
              <img src={image} alt="course" />
            </div>
            <div className={classes.description}>
              <p className={classes.title}>{title}</p>
              <p className={classes.desc}>{description}</p>
              <p className={classes.creator}>Content Creator : {creator}</p>
            </div>
        </div>
            <div className={classes.course__content}>
            {/* <source src="/Videos/video1.mp4" type="video/mp4"/> */}
              <button onClick={handleShow} className={classes.button}>Show Content</button>
              {show && <ul>
                {contentList.map((content) => {
                  return <li className={classes.steps}>{content}</li>;
                })}
              </ul>}
            </div>
          </div>
        <Footer />
      </>
    );

}
export default SingleCourse;