import ProgressBar from "react-bootstrap/ProgressBar";

function Progress(props) {
  return <ProgressBar now={props.progress} />;
}

export default Progress;
