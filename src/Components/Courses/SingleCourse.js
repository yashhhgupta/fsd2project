import Footer from "../UI/Footer";
import Navb from "../UI/Navb";
import React from 'react';
import bootstrap from 'bootstrap';
import classes from "./SingleCourse.module.css";
import { useState } from 'react';

const SingleCourse = (props) => {
    const {image , title , description, contentList} = props.course;
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
            <div className={classes.course__content}>
              <h1>{title}</h1>
              <p>{description}</p>
              <button onClick={handleShow}>Show Content</button>
              {show && <ul>
                {contentList.map((content) => {
                  return <li>{content}</li>;
                })}
              </ul>}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );

}
export default SingleCourse;