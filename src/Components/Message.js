import Card from "./UI/Card";
import classes from "./Message.module.css";
import {useLocation} from "react-router-dom";
const Message = (props) => {
  const location = useLocation();
  // console.log(location.state);
  return (
    <Card className={classes.input}>
      <h1 style={{ color: "white" }}>
        <u>Request Sent</u>
      </h1>
      {/* <div class="check"></div> */}
      <br></br>
      <h3 style={{ color: "white" }}>Your request for the course :</h3>
      <h3 style={{ color: "white" }}>
        <u>Course Title:</u>
        <i> {location.state.title}</i>
        <br></br>
        <u>Course Description:</u>
        <i> {location.state.description}</i>
      </h3>
      <br></br>
      <h4 style={{ color: "white" }}>
        on date <u>{location.state.date}</u> has been sent.
        <br></br> We will consider and work on your request and get back to you
        as soon as possible.
      </h4>
    </Card>
  );
};
export default Message;
