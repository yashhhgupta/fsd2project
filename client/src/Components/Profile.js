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
import Footer from "./UI/Footer";
import Guitar from "./assets/Guitar.jpg";
import Navb from "./UI/Navb";
import React from "react";
import styles from "./Profile.module.css";
import {useState,useEffect,useContext } from "react";
import Button from "react-bootstrap/Button";
import classes from "./UI/SquareCard.module.css";
import AuthContext from "../store/auth-context.js";


// import Chess from "./assets/Chess.jpg";


export default function Profile() {
  const ctx = useContext(AuthContext);

  const [profile,setProfile] = useState()
  const [imgData, setImgData] = useState(
    "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
  );
  const [userD,setUserD]=useState({})
  const [myCourses, setMyCourses] = useState([]);
  const [haveMyCourses, setHaveMyCourses] = useState(true);


  useEffect(() => {
    const uid = localStorage.getItem("userId");
    const fetchitems = () => {
      fetch("http://localhost:3001/users/"+uid)
        .then((response) => response.json())
        .then((data) => {
          setUserD({
            username : data.username,
            email : data.email,
            phone : data.phone,
            address : data.address,
          }
          );
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      // const data = response.json();
    };
    fetchitems();
  }, []);
  useEffect(() => {
    const fetchitems = () => {
      const uid = localStorage.getItem("userId");
      // console.log(uid);
      fetch("http://localhost:3001/getUser", {
        method: "POST",
        body: JSON.stringify({ id: uid }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data.users.mycourses);
          setMyCourses(data.users.mycourses);
          // console.log(myCourses.length);
          // console.log(data[0].mycourses);
          setUserD({
            username : data.users.username,
            email : data.users.email,
            phone : data.users.phone,
            address : data.users.address,
          })
          
        })
        .catch((err) => {
          console.log(err);
        });
      // const data = response.json();
    };
    fetchitems();
  }, []);
  // console.log(haveMyCourses);
  const submitHandler=()=>{
    const uid = localStorage.getItem("userId");
    // console.log(userD);
    fetch("http://localhost:3001/updateUserDetails", {
      method: "POST",
      body: JSON.stringify({ id: uid,phone:userD.phone,address:userD.address}),
      
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
  }
    // const port = useContext(CoursesContext);
    // let myCourses = port.courses.filter((course) => {
    //   return course.progress !== undefined;
    // });
  return (
    <>
      <Navb></Navb>
      <section style={{ backgroundColor: "#beige" }}>
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
                      src={imgData}
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "150px", backgroundColor: "white" }}
                      fluid
                    />
                    <form>
                      <input
                        type="file"
                        onChange={(e) => {
                          setProfile(e.target.files[0]);
                          // setPicture(e.target.files[0]);
                          const reader = new FileReader();
                          reader.addEventListener("load", () => {
                            setImgData(reader.result);
                          });
                          reader.readAsDataURL(e.target.files[0]);
                        }}
                        className="text-muted mb-1"
                      ></input>
                    </form>
                    <p
                      className="text-muted mb-1"
                    >
                      {userD.username}
                    </p>
                    <p
                      className="text-muted mb-4"
                    >
                      {userD.address}
                    </p>
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
                          <input
                            value={userD.username}
                            onChange={(event) =>
                              setUserD({
                                ...userD,
                                username: event.target.value,
                              })
                            }
                          ></input>
                          {/* <div style={{ fontWeight: "bold" }}>
                            {userD.username}
                          </div> */}
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
                          <input
                            value={userD.email}
                            onChange={(event) =>
                              setUserD({
                                ...userD,
                                email: event.target.value,
                              })
                            }
                          ></input>
                          {/* <div style={{ fontWeight: "bold" }}>
                            {userD.email}
                          </div> */}
                          {/* {userD.email} */}
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
                          <input
                            value={userD.phone}
                            onChange={(event) =>
                              setUserD({
                                ...userD,
                                phone: event.target.value,
                              })
                            }
                          ></input>
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
                          <input
                            value={userD.address}
                            onChange={(event) =>
                              setUserD({
                                ...userD,
                                address: event.target.value,
                              })
                            }
                          ></input>

                          <i className="fa-solid fa-pen-to-square mx-3"></i>
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                  <Button className={classes.Button} onClick={submitHandler}>
                    Submit
                  </Button>
                </MDBCard>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      {!ctx.isLoggedInAd && (
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
              <Badge
                name={Guitar}
                title="Plectrum Guitar for beginners"
              ></Badge>
            </div>
            <div className={styles.innerbadge}>
              <Badge name={BasketBall} title="Basics of Basket Ball"></Badge>
            </div>
            {/* <Badge name={Chess} title="Basics of Chess" ></Badge> */}
          </div>
        </div>
      )}
      {!ctx.isLoggedInAd && (
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
          {haveMyCourses && <CourseCards items={myCourses}></CourseCards>}
          {!haveMyCourses && (
            <h3 style={{ color: "black", textAlign: "center", padding: "1%" }}>
              No Registered Courses{" "}
            </h3>
          )}
        </div>
      )}

      <Footer></Footer>
    </>
  );
}
