import React, {useContext,useState,useEffect} from 'react';

import AuthContext from "../../store/auth-context";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ProfilePic from "../assets/ProfilePic.jpg";
import classes from "./Navb.module.css";
import Select from "react-select";
import { useNavigate } from "react-router-dom";


function Navb() {
  const ctx = useContext(AuthContext);
  const [selectedOptions, setSelectedOptions] = React.useState(null);
  const optionList = [];
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchitems = () => {
      fetch("https://howtobasic.onrender.com/courses")
        .then((response) => response.json())
        .then((data) => {
          setCourses(data.courses);
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      // const data = response.json();
    };
    fetchitems();
  }, );
  for(let i=0;i<courses.length;i++){
    optionList.push({value:courses[i].title,label:courses[i].title , id:courses[i]._id});
  }
  function handleSelect(data) {
    setSelectedOptions(data);
    navigate("/course/"+data.id);
  }
  return (
    <>
      <div className={classes.set}>
        <Navbar className={classes.NavbarMain}>
          <Container>
            <Navbar.Brand>
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className={classes.heading}
              >
                <img
                  alt=""
                  src="https://images-platform.99static.com//07LvaO3g4kyq6fDJNuXL2Tz6mCQ=/162x151:2074x2063/fit-in/500x500/projects-files/127/12734/1273474/3ce6ead9-abd5-499e-ab2d-64c7190c912e.jpg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                {"      "}
                <span style={{ color: "black" }}>
                  <strong>HowToBasic</strong>
                </span>
              </Link>
            </Navbar.Brand>
            <Nav>
              {!ctx.isLoggedInAd && (
                <Link to="/RequestForm" style={{ textDecoration: "none" }}>
                  <div className={classes.headings1}>
                    <span style={{ color: "black" }}>
                      <b>Request a Course</b>
                    </span>
                  </div>
                </Link>
              )}
              {ctx.isLoggedInAd && (
                <>
                  <Link
                    to="/RequestedCourses"
                    className={classes.headings1}
                    style={{ textDecoration: "none" }}
                  >
                    <div className={classes.headings1}>
                      <span style={{ color: "black" }}>
                        <b>Requested Courses</b>
                      </span>
                    </div>
                  </Link>
                  <Link
                    to="/AddCourse"
                    className={classes.headings1}
                    style={{ textDecoration: "none" }}
                  >
                    <div className={classes.headings1}>
                      <span style={{ color: "black" }}>
                        <b>Add a course</b>
                      </span>
                    </div>
                  </Link>
                  <Link
                    to="/UserDetails"
                    className={classes.headings1}
                    style={{ textDecoration: "none" }}
                  >
                    <div className={classes.headings1}>
                      <span style={{ color: "black" }}>
                        <b>User Details</b>
                      </span>
                    </div>
                  </Link>
                </>
              )}
            </Nav>
            <Nav>
              <Button
                variant="info"
                onClick={ctx.onLogout}
                className={classes.Button}
              >
                Logout
              </Button>
              {!ctx.isLoggedInAd && (
                <Link
                  to="/Profile"
                  style={{ textDecoration: "none" }}
                  className={classes.heading}
                >
                  <img
                    alt=""
                    src={ProfilePic}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                  />
                  {"      "}
                </Link>
              )}
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div style={{ backgroundColor: "#d29a55" }}>
        <div style={{ width: "50%", margin: "0 auto"}}>
          <Select
            options={optionList}
            placeholder="Search Courses"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
          />
        </div>
      </div>
    </>
  );
}

export default Navb;
