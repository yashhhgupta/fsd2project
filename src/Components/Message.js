import Card from "./UI/Card";
import classes from "./Message.module.css";
import {useLocation} from "react-router-dom";
const Message = (props) => {
  const location = useLocation();
  // console.log(location.state);
  return (
    <Card className={classes.input}>
      <h1 style={{ color: "white", textAlign: "center" }}>
        <u>Request Sent</u>
      </h1>
      <div style={{ padding: "0% 20% 0% 20%" }}>
        {/* <div class="check"></div> */}
        <br></br>
        <h4 style={{ color: "white" }}>Your request for the course :</h4>
        <h4 style={{ color: "white" }}>
          <span style={{ color: "#5bc0de" }}>
            <u>Course Title:</u>
          </span>
          <i> {location.state.title}</i>
          <br></br>
          <span style={{ color: "#5bc0de" }}>
            <u>Course Description:</u>
          </span>

          <i> {location.state.description}</i>
        </h4>
        <br></br>
        <p style={{ color: "white" }}>
          on date <u>{location.state.date}</u> has been sent.
          <br></br> We will consider and work on your request and get back to
          you as soon as possible.
        </p>
      </div>
    </Card>
  );
};
export default Message;
