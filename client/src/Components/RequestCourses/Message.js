import Card from "../UI/Card";
import Footer from "../UI/Footer";
import Navb from "../UI/Navb";
import {useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Message = (props) => {
  const location = useLocation();
  const [file,setFile] = useState(null)
  useEffect(()=>{
    console.log(location.state.image)
axios.get(`http://localhost:3001/${location.state.image}`,{responseType:'blob'})
.then(res=>{
  const reader = new FileReader();
          reader.addEventListener("load", () => {
            setFile(reader.result);
          });
          reader.readAsDataURL(res.data);
})
  },[])

  return (
    <>
      <Navb></Navb>
      <div className="p-5">
        <Card>
          <div style={{ padding: "1%" }}>
            <h3> Your request for the course :</h3>
            <div style={{ padding: "1%" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
               {file !== null ?  <img src={file} alt="No image found" width="200px"></img>:<p>Loading .....</p>}
                <div>
                  <h4>Course Requested by:</h4>
                  <h5>User: {location.state.name}</h5>
                  <h5>Email: {location.state.email}</h5>
                </div>
              </div>
              <div style={{ padding: "1% 3%" }}>
                <h2>
                  <u>{location.state.title}</u>
                </h2>
                <h5>{location.state.text}</h5>
                <p>{location.state.description}</p>
              </div>
            </div>
            <h3>has been sent to us.</h3>
            <h6>
              We will consider your request and add this course as soon as
              possible.
            </h6>
          </div>
        </Card>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Message;
