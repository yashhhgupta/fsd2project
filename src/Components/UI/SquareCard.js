import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Progress from "./Progress"
import Star from "./Star"
function SquareCard(props) {
  return (
      <Card
        style={{
          width: "20rem",
          backgroundColor: "#212529",
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
          <Card.Title style={{ color: "white" }}>{props.title}</Card.Title>
          <Star />
          <Card.Text style={{ color: "white" }}>{props.text}</Card.Text>

          {props.progress > 0 && (
            <Progress progress={props.progress}></Progress>
          )}
          {props.progress === 0 && (
            <div className="d-flex justify-content-center">
              <Button variant="info">Register</Button>
            </div>
          )}
        </Card.Body>
      </Card>
  );
}

export default SquareCard;
