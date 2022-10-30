import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

import Badge from "./UI/Badge.js";
import BasketBall from "./assets/BasketBall.jpg";
import Card from "./UI/Card";
import CourseCards from "./Courses/CourseCards";
import { CoursesContext } from "./Courses/Courses";
import Footer from "./UI/Footer";
import Guitar from "./assets/Guitar.jpg";
import Navb from "./UI/Navb";
import ProfilePic from "./assets/ProfilePic.jpg";
import React from "react";
import styles from "./Profile.module.css";
import { useContext } from "react";

// import Chess from "./assets/Chess.jpg";










export default function Profile() {
    const port = useContext(CoursesContext);
    let myCourses = port.courses.filter((course) => {
      return course.progress !== undefined;
    });
  return (
    <>
      <Navb></Navb>
      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <div className={styles.profilep}>
                <MDBCard
                  className="mb-4"
                  style={{ backgroundColor: "beige", border: "beige" }}
                >
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "150px", backgroundColor: "white" }}
                      fluid
                    />
                    <p className="text-muted mb-1">Johnatan Smith</p>
                    <p className="text-muted mb-4">Sri City, Andhra Pradesh</p>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </MDBCol>
            <MDBCol lg="8">
              <div className={styles.profilep}>
                <MDBCard
                  className="mb-4"
                  style={{ backgroundColor: "beige", border: "beige" }}
                >
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Full Name</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          Johnatan Smith
                          <i className="fa-solid fa-pen-to-square mx-3"></i>
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Email</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          johnatan.smith@gmail.com
                          <i className="fa-solid fa-pen-to-square mx-3"></i>
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Phone</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          +91 1234567890
                          <i className="fa-solid fa-pen-to-square mx-3"></i>
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Address</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          Sri City, Andhra Pradesh
                          <i className="fa-solid fa-pen-to-square mx-3"></i>
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className={styles.heading}>
        <Card>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              padding: "1%",
            }}
          >
            Badges Earned
          </h1>
        </Card>
        <div className={styles.badges}>
          <div className={styles.innerbadge}>
            <Badge name={Guitar} title="Plectrum Guitar for beginners"></Badge>
          </div>
          <div className={styles.innerbadge}>
            <Badge name={BasketBall} title="Basics of Basket Ball"></Badge>
          </div>
          {/* <Badge name={Chess} title="Basics of Chess" ></Badge> */}
        </div>
      </div>
      <div style={{ padding: "1%" }}>
        <Card>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              padding: "1%",
            }}
          >
            My Courses
          </h1>
        </Card>
        {myCourses.length > 0 && <CourseCards items={myCourses}></CourseCards>}
        {myCourses.length === 0 && (
          <h3 style={{ color: "black", textAlign: "center", padding: "1%" }}>
            No Registered Courses{" "}
          </h3>
        )}
      </div>
      <Footer></Footer>
    </>
  );
}
