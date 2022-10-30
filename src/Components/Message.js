import Card from "./UI/Card";
import classes from "./Message.module.css";
import {useLocation} from "react-router-dom";
import Navb from "./Navb";
import Footer from "./UI/Footer";
const Message = (props) => {
  const header ={ 
    textAlign: "center",
    color: "black",
    backgroundColor: "#d29a55"
  }
  const location = useLocation();
  // console.log(location.state);
  return (
    <>
    <Navb></Navb>
      <div className={classes.body}>
        <Card className={classes.input}>
          <div style={header}>
            <h1 style={{ color: "black", textAlign: "center" }}>
              Request Sent
            </h1>
          </div>
          <div style={{ padding: "0% 20% 0% 20%" }}>
            {/* <div class="check"></div> */}
            <br></br>
            <h4 style={{ color: "white" }}>Your request for the course :</h4>
            <h4 style={{ color: "white" }}>
              <span>Course Title:&nbsp;</span>
              <i> {location.state.title}</i>
              <br></br>
              <span>Course Description:&nbsp;</span>

              <i> {location.state.description}</i>
            </h4>

            <p style={{ color: "white" }}>
              on date <u>{location.state.date}</u> has been sent.
              <br></br> We will consider and work on your request and get back
              to you as soon as possible.
            </p>
          </div>
        </Card>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Message;
