import MySquareCard from "./UI/MySquareCard";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const MyCourseCards = (props) => {
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Simple tooltip
      </Tooltip>
    );
  return (

    
    <div className="row m-2">
      {props.items.map((course) => {
        return (
          <OverlayTrigger
            placement="right"
            delay={{ show: 0, hide: 0 }}
            overlay={renderTooltip}
          >
            <div className="col-md-3">
              <MySquareCard
                title={course.title}
                text={course.text}
                progress={course.progress}
              />
            </div>
          </OverlayTrigger>
        );
      })}
    </div>
  );
};
export default MyCourseCards;
