import { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";

const Feedback=({courseid})=>{
    // const {} = props;
    const [reCourses, setReCourses] = useState([]);
    // console.log("courseid: ",courseid)
    useEffect(() => {
      const fetchitems = () => {
        
        // fetch("http://localhost:3001/feedbacks")
        fetch(`http://localhost:3001/feedbacks?courseid=${courseid}`)
          .then((response) => response.json())
          .then((data) => {setReCourses(data.feedback);
            console.log(data);
          })
          .catch((err) => {console.log(err);});
          // const data = response.json();
      };
      fetchitems();
    }, []);
    return (
      <>
      <div>
        <h4 style={{ paddingTop:"3%", fontWeight:"bold" }}>
          Reviews
        </h4>
        <div style={{height:"150px",overflowY:"scroll", border: "1px solid black",marginRight:"2%"}}>
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