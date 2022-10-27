import React, { useState } from "react";
import Card from "./UI/Card";
import Button from "react-bootstrap/Button";
import classes from "./RequestForm.module.css";
import ErrorModal from "./UI/ErrorModal";
import { useNavigate } from "react-router-dom";
const initialFormState = {
  title: "",
  text : "",
  description: "",
  imageURL: "",
};

const AddCourse = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleFormChange = (e) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [e.target.id]: e.target.value,
    }));
    // console.log(e.target.name);
  };
  const errorHandler = (event) => {
    setError(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      
      formState.text.trim().length === 0 ||
      formState.title.trim().length === 0 ||
      formState.description.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name, email , date and course details.",
      });
      return;
    }
    if (
      formState.title.trim().length > 20
    ) {
      setError({
        title: "Invalid input",
        message: "Title length can not be greater than 20 characters",
      });
      return;
    }
    const CourseData = {
      title: formState.title,
      text: formState.text,
      description: formState.description,
      imageURL: formState.imageURL,
    };
    console.log(CourseData);
    setFormState(initialFormState);
    setError({
      title: "Success",
      message: "Course added successfully",
      buttontxt: "Go to Home",
    })
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
          buttontxt={error.buttontxt}
          onClickHome={() => navigate("/")}
        ></ErrorModal>
      )}

      <Card className={classes.input}>
        <div class="text-center">
          <h1 style={{ color: "white" }}>Add a Course</h1>
        </div>
        <form onSubmit={handleFormSubmit}>
          <label>Course Title</label>
          <input
            type="text"
            id="title"
            value={formState.title}
            onChange={handleFormChange}
          />
          <label>Course Text</label>
          <input
            type="text"
            id="text"
            value={formState.text}
            onChange={handleFormChange}
          />

          <label>Description</label>
          <div>
            <textarea
              id="description"
              className={classes.add}
              value={formState.description}
              onChange={handleFormChange}
            ></textarea>
            <label>Course Image URL</label>
            <input
              type="text"
              id="imageURL"
              placeholder="Enter URL of image"
              value={formState.imageURL}
              onChange={handleFormChange}
            />
          </div>
          <br></br>
          <div class="text-center">
            <Button variant="info" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default AddCourse;
