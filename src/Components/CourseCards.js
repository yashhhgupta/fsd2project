import SquareCard from "./UI/SquareCard";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const CourseCards = (props) => {

  const checkHandler = (title) => {
    props.setc(title);
  }
  return (
    <div className="row m-2">
      {props.items.map((course) => {
        const renderTooltip = (props) => (
          <Tooltip id="button-tooltip" {...props}>
            {course.description}
          </Tooltip>
        );
        return (
          <OverlayTrigger
            placement="right"
            delay={{ show: 0, hide: 0 }}
            overlay={renderTooltip}
            // overlay={()=>renderTooltip(course.details)}
          >
            <div className="col-md-3">
              <SquareCard
                title={course.title}
                text={course.text}
                progress={course.progress}
                check={checkHandler}
              />
            </div>
          </OverlayTrigger>
        );
      })}
    </div>
  );
};
export default CourseCards;
