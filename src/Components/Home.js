import { useContext, useState ,useEffect} from "react";

import Card from "./UI/Card";
import CourseCards from "./Courses/CourseCards";
import Footer from "./UI/Footer";
import Navb from "./UI/Navb";
import SimpleCarousel from "./UI/SimpleCarousel";
import classes from "./RequestCourses/RequestForm.module.css";
import { useLocation } from "react-router-dom";
import AuthContext from "../store/auth-context";


const Home = (props) => {
  // console.log(port.courses);
  const ctx = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [myCourses, setMyCourses] = useState(undefined);
  const [haveMyCourses, setHaveMyCourses] = useState(false);
  const [courseData, setCourseData] = useState({});
  
  const registerCourseHandler =  (id) => {
     fetch("http://localhost:3001/courses?id=" + id)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCourseData(data[0]);
        console.log(courseData);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(courseData);
    setCourseData({
      ...courseData,
      progress: 0
    });
    console.log(courseData);
  const uid = localStorage.getItem("userId");
  fetch("http://localhost:3001/users/" + uid)
    .then((response) => response.json())
    .then((data) => {
      const usercourses = data.mycourses;
      usercourses.push(courseData);
      fetch("http://localhost:3001/users/" + uid, {
        method: "PATCH",
        body: JSON.stringify({ mycourses: usercourses }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
    }
    );
  
  };
  useEffect(() => {
    const fetchitems = () => {
      fetch("http://localhost:3001/courses")
        .then((response) => response.json())
        .then((data) => {
          setCourses(data);
          // console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      // const data = response.json();
    };
    fetchitems();
  }, [registerCourseHandler]);
  useEffect(() => {
    const fetchitems = () => {
      const uid = localStorage.getItem('userId');
      // console.log(uid);
      fetch("http://localhost:3001/users?id="+uid)
        .then((response) => response.json())
        .then((data) => {
          setMyCourses(data[0].mycourses);
          if (data[0].mycourses.length > 0) {
            setHaveMyCourses(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      // const data = response.json();
    };
    fetchitems();
  }, []);
  
  
  return (
    <>
      <Navb></Navb>
      <div className={classes.Home}>
        <SimpleCarousel></SimpleCarousel>
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
            {/* {console.log(myCourses)} */}
            {haveMyCourses && (
              <CourseCards
                items={myCourses}
                setc={registerCourseHandler}
              ></CourseCards>
            )}
            {!haveMyCourses && (
              <h3
                style={{ color: "black", textAlign: "center", padding: "1%" }}
              >
                No Registered Courses{" "}
              </h3>
            )}
          </div>
        )}
        <div style={{ padding: "1%" }}>
          <Card>
            <h1
              style={{
                textAlign: "center",
                fontWeight: "bold",
                padding: "1%",
              }}
            >
              All Courses
            </h1>
          </Card>
          {courses.length > 0 && (
            <CourseCards
              items={courses}
              setc={registerCourseHandler}
            ></CourseCards>
          )}
          {courses.length === 0 && (
            <h3 style={{ color: "black", textAlign: "center", padding: "1%" }}>
              All Courses Registered
            </h3>
          )}
        </div>
        {/* <div>
        <h1>All Courses</h1>
        <CourseCards items={restCourses}></CourseCards>
      </div> */}
      </div>
      <Footer></Footer>
    </>
  );
};
export default Home;
