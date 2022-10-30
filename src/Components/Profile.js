import React from "react";
import ProfilePic from "./assets/ProfilePic.jpg";
import Guitar from "./assets/Guitar.jpg";
import BasketBall from "./assets/BasketBall.jpg";
// import Chess from "./assets/Chess.jpg";
import Badge from "./UI/Badge.js";
import styles from "./Profile.module.css";
import { CoursesContext } from "./Courses";
import { useContext } from "react";
import CourseCards from "./CourseCards";
import Card from "./UI/Card";
import Navb from "./Navb";
import Footer from "./UI/Footer";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,

} from "mdb-react-ui-kit";

export default function Profile() {
    const port = useContext(CoursesContext);
    let myCourses = port.courses.filter((course) => {
      return course.progress !== undefined;
    });
  return (
    <>
      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4" style={{ backgroundColor:"beige",border:"beige"}}>
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" ,backgroundColor:"white"}}
                    fluid
                  />
                  <p className="text-muted mb-1">Yash Gupta</p>
                  <p className="text-muted mb-4">Agra, Uttar Pradesh</p>
                  
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8" >
              <MDBCard className="mb-4" style={{ backgroundColor:"beige",border:"beige"}}>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        Johnatan Smith
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
                        example@example.com
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
                        (097) 234-5678
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Mobile</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        (098) 765-4321
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
                        Bay Area, San Francisco, CA
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
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
