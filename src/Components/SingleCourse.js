import React from 'react';
import classes from "./SingleCourse.module.css";
import Navb from "./Navb";
import Footer from "./UI/Footer";

const SingleCourse = (props) => {
    const {image , title , description , author , rating, students , hours , lecture , level} = props.course;
    return (
      <>
        <Navb></Navb>
        <div className="row main-area">
          <flexbox>
            <div className="col-md-6">
              <img src={image} alt="" className={classes.banner} />
            </div>
          </flexbox>
          <div className="col-md-8 pr-5">
            <h5>{title}</h5>
            <p>{description}</p>
            <div className="row">
              <div className="col-md-8">
                <h6>
                  {" "}
                  <span>by: </span> {author}
                </h6>
                <h6>
                  {" "}
                  <b>{rating}</b> user rating ({students} students)
                </h6>
                <ul>
                  <li>{hours} total hours,</li>
                  <li>{lecture} lectures,</li>
                  <li>{level} levels</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
};

export default SingleCourse;