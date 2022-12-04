import { useState ,useEffect } from "react";

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
      <div>
        <h4 style={{ paddingTop:"3%", fontWeight:"bold" }}>
          Reviews
        </h4>
        <div>
            {reCourses.map((feedback) => {
            return (
                        <div>
                        <h5 style = {{fontWeight:"bold",paddingLeft:"0.9%"}}>{feedback.name} :</h5>
                        <h6 style = {{paddingLeft:"1.4%",}}>{feedback.review}</h6>
                        </div>
            );
            })}
        </div>
        </div>
      </>
    );
}
export default Feedback;