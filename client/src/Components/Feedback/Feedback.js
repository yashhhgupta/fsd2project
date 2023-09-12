import { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";

const Feedback=(props)=>{
    // const {} = props;
    
    return (
      <>
      <div>
        
        <div style={{height:"150px",overflowY:"scroll", border: "1px solid black",marginRight:"2%"}}>
            {props.reCourses.map((feedback) => {
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