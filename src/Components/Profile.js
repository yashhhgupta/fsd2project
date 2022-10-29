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
import Card from"./UI/Card";

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
        <div style={{ padding: "1%" }}>
          <Card>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                padding: "1%",
              }}
            >
              My Courses
            </h1>
          </Card>
          {myCourses.length > 0 && (
            <CourseCards
              items={myCourses}
            ></CourseCards>
          )}
          {myCourses.length === 0 && (
            <h3 style={{ color: "black", textAlign: "center", padding: "1%" }}>
              No Registered Courses{" "}
            </h3>
          )}
        </div>
      </div>
    );
};

export default Profile;