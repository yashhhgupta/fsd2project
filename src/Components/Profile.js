import React from "react";
import ProfilePic from "./assets/ProfilePic.jpg";
import Guitar from "./assets/Guitar.jpg";
import BasketBall from "./assets/BasketBall.jpg";
// import Chess from "./assets/Chess.jpg";
import Badge from "./UI/Badge.js";
import styles from "./Profile.module.css";
import { CoursesContext } from "./Courses";
import {useContext} from "react";
import CourseCards from "./CourseCards";

const Profile = (props) => {
  const port = useContext(CoursesContext);
    let myCourses = port.courses.filter((course) => {
      return course.progress !== undefined;
    });
    return (
      <div className={styles.body}>
        <div className={styles.header}>
          <img src={ProfilePic} alt="ProfilePic" className={styles.image} />
        </div>
        <div className={styles.name}>Welcome to {props.name}'s Profile</div>
        <div className={styles.heading}>
          Badges Earned
          <div className={styles.badges}>
            <Badge name={Guitar} title="Plectrum Guitar for beginners"></Badge>
            <Badge name={BasketBall} title="Basics of Basket Ball"></Badge>
            {/* <Badge name={Chess} title="Basics of Chess" ></Badge> */}
          </div>
        </div>
        <div>
          <div>
            <h1>My Courses</h1>
            <CourseCards
              items={myCourses}
            ></CourseCards>
          </div>
        </div>
      </div>
    );
};

export default Profile;