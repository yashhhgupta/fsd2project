import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Progress from "./Progress"
import Star from "./Star";
import classes from "./SquareCard.module.css";
function SquareCard(props) {
  const buttonHandler = () => {
    props.check(props.title);

  }
  return (
    <Card
      style={{
        width: "18rem",
        backgroundColor: "#28282b",
        border: "1rem",
        padding: "1rem",
        margin: "1rem",
      }}
    >
      <Card.Img
        variant="top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-sNGlXGfEerbW8D09xP6155A0fo4QD7MKZg&usqp=CAU"
      />
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
