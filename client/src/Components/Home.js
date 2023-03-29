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
  const [update ,setUpdate]= useState(false);
  let courseDataVar =  {};
  const registerCourseHandler =  async (id) => {
      //change the above code to async await
      const res = await fetch("http://localhost:3001/courses/" + id);
      const data = await res.json();
      courseDataVar = {...data.course,progress:0}
      const uid = localStorage.getItem("userId");
        const response = await fetch("http://localhost:3001/addCourse", {
          method: "POST",
          body: JSON.stringify({ id: uid, course: courseDataVar }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        setUpdate(!update);

  // }
  };
  // console.log(update);
  useEffect(() => {
    const fetchitems = () => {
      fetch("http://localhost:3001/courses")
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
  }, [update]);
  useEffect(() => {
    const fetchitems = () => {
      const uid = localStorage.getItem('userId');
      // console.log(uid);
      fetch("http://localhost:3001/getUser",{method:"POST",body:JSON.stringify({id:uid}),headers:{"Content-type":"application/json; charset=UTF-8"}})
        .then((response) => response.json())
        .then((data) => {
          // console.log(data.users);
          setMyCourses(data.users.mycourses);
          if (data.users.mycourses.length > 0) {
            setHaveMyCourses(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      // const data = response.json();
    };
    fetchitems();
  }, [update]);

  const restCourses = courses.filter((course) =>{
    if(myCourses){
      return !myCourses.some((myCourse) => myCourse._id === course._id);
    }
    else{
      return true;
    }

  })
  const deleteCourseHandler = (id) => {
    fetch("http://localhost:3001/users?q="+id)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        let temp = data;
        if(temp.length>0) {
          alert("Admin can't delete course if a user is registered for it");
          return;
        }
      })

    fetch(("http://localhost:3001/courses/"+id), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (update) {
      setUpdate(false);
    } else setUpdate(true);
    // console.log(id);
  }
  // console.log("my courses",myCourses);
  // console.log("rest courses",courses);
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
              items={restCourses}
              setc={registerCourseHandler}
              setd={deleteCourseHandler}
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
