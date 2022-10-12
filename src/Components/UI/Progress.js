import ProgressBar from "react-bootstrap/ProgressBar";

function Progress(props) {
  return <ProgressBar variant ="info" now={props.progress} />;
}

export default Progress;
