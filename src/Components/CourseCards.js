import SquareCard from "./UI/SquareCard";
const CourseCards=(props)=>{
    return (
      <div className="row m-2">
        {props.items.map((course) => {
          return (
            <div className="col-md-3">
              <SquareCard title={course.title} text={course.text} />
            </div>
          );
        })}
      </div>
    );
}
export default CourseCards;