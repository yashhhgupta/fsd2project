import Card from "./Card";
import Button from "react-bootstrap/Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  // console.log(props);
  return (
    <div>
      <div className={classes.backdrop}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          {props.buttontxt==="Okay" && (
            <Button variant="info" onClick={props.onConfirm}>
              Okay
            </Button>
          )}
          {props.buttontxt!=="Okay" && (
            <Button variant="info" onClick={props.onClickHome}>
              {props.buttontxt}
            </Button>
          )}
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
