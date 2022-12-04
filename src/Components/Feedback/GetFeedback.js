import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "../RequestCourses/RequestForm.module.css";
import { useNavigate } from "react-router-dom";

const initialFormState = {
  name: "",
  course: "",
  review: "",
};

const GetFeedback = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleFormChange = (e) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [e.target.id]: e.target.value
    }));
    console.log(e.target.name);
  };
  const errorHandler = (event) => {
    setError(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
        formState.name.trim().length === 0,
        formState.course.trim().length === 0,
      formState.review.trim().length === 0 
    ) {
      setError({
        title: "Blank Feedback",
        message: "Please Enter your Feedback.",
        buttontxt: "Okay",
      });
      return;
    }
    const userData = {
      name: formState.name,
      course: formState.course,
      review: formState.review,
    };
    console.log(userData)
    setFormState(initialFormState);
    fetch("http://localhost:3001/feedbacks", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    })
    .catch((err) => {
        console.log(err);
      });
    navigate("/home", { state: userData });
  };

  return (
    <>
      <div>
        {error && (
          <ErrorModal
            message={error.message}
            onConfirm={errorHandler}
            buttontxt={error.buttontxt}
          ></ErrorModal>
        )}
        <h4 style={{fontWeight:"bold"}}>Give your feedback</h4>
          <form onSubmit={handleFormSubmit}>
            <div>
            <label style={{fontWeight:"bold"}}>Name : </label>
            <input
              type="text"
              id="name"
              value={formState.name}
              onChange={handleFormChange}
              style = {{borderRadius:'2%',margin:"0.5%",marginLeft:"2.7%"}}
            />
            <br></br>
            <label style={{fontWeight:"bold"}}>Course :</label>
            <input
              type="text"
              id="course"
              value={formState.course}
              onChange={handleFormChange}
              style = {{borderRadius:'2%',margin:"0.5%",marginLeft:"2%"}}
            />
            <br></br>
            <label style={{fontWeight:"bold"}}>Feedback : </label>
            <input
              type="text"
              id="review"
              value={formState.review}
              onChange={handleFormChange}
              style = {{borderRadius:'2%',margin:"0.5%",marginLeft:"0.5%"}}
            />
            </div>
            <div class="text-center">
              <Button variant="info" type="submit" className={classes.Button} style = {{float:"left",marginLeft:"10% "}}>
                Submit
              </Button>
            </div>
          </form>
      </div>
    </>
  );
};

export default GetFeedback;
