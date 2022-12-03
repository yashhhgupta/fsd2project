import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Progress from "./Progress"
import Star from "./Star";
import classes from "./SquareCard.module.css";
import { Link } from "react-router-dom";

function SquareCard(props) {
  const buttonHandler = () => {
    props.check(props.title);
  }
  // console.log(props);
  return (
    
    <Card
      style={{
        width: "18rem",
        backgroundColor: "#28282b",
        border: "1rem",
        padding: "0.5rem",
        margin: "1rem",
        boxShadow: "0px 0 15px rgba(0,0,0,0.6)",
      }}
    >
      <Link to={`/course/${props.id}`}>

      <Card.Img
        variant="top"
        src={props.imageURL}
        />
        </Link>
      <Card.Body>
        <Card.Title style={{ color: "beige" }}>{props.title}</Card.Title>
        <Star />
        <Card.Text style={{ color: "beige" }}>{props.text}</Card.Text>

        {(props.progress || props.progress === 0) && (
          <Progress progress={props.progress}></Progress>
        )}
        {(!props.progress && props.progress !== 0) && (
          <div className="d-flex justify-content-center">
            <Button className={classes.Button} onClick={buttonHandler}>Register</Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default SquareCard;
