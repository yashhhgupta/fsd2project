import { useState ,useEffect } from "react";
import classes from "./Feedback.module.css";

const Feedback=()=>{
    const [reCourses, setReCourses] = useState([]);
    useEffect(() => {
      const fetchitems = () => {
        fetch("http://localhost:3001/feedbacks")
          .then((response) => response.json())
          .then((data) => {
            setReCourses(data);
            // console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      fetchitems();
    }, []);
    return (
      <>
      <div className={classes.box}>
        <h1 style={{ paddingLeft:"2%", paddingTop:"3%" }}>
          Feedback
        </h1>
        <div>
            {reCourses.map((feedback) => {
            return (
                        <div>
                        <h6>{feedback.name} : {feedback.review}</h6>
                        <h5></h5>
                        </div>
            );
            })}
        </div>
        </div>
      </>
    );
}
export default Feedback;