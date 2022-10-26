import React, { useState } from "react";
import Card from "./UI/Card";
import Button from "react-bootstrap/Button";
import classes from "./RequestForm.module.css";
import ErrorModal from "./UI/ErrorModal";
import { useNavigate } from "react-router-dom";
const initialFormState = {
  name: "",
  email: "",
  date: "",
  title: "",
  description: "",
};

const RequestForm = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleFormChange = (e) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [e.target.id]: e.target.value
    }));
    // console.log(e.target.name);
  };
  const errorHandler = (event) => {
    setError(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      formState.name.trim().length === 0 ||
      formState.email.trim().length === 0 ||
      formState.date.trim().length === 0 ||
      formState.title.trim().length === 0 ||
      formState.description.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message:
          "Please enter a valid name, email , date and course details.",
      });
      return;
    }
    var CurrentDate = new Date();
    var date = new Date(formState.date);
    if (date < CurrentDate) {
      setError({
        title: "Invalid Date",
        message: "Date must be greater or equal to current date",
      });
      return;
    }
    const userData = {
      name: formState.name,
      email: formState.email,
      date: formState.date,
      title: formState.title,
      description: formState.description,
    };
    // console.log(userData);
    setFormState(initialFormState);
    navigate("/Message", { state: userData });
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}

      <Card className={classes.input}>
        <div class="text-center">
          <h1 style={{ color: "white" }}>Request a Course</h1>
        </div>
        <form onSubmit={handleFormSubmit}>
          <label>Name</label>
          <input
            type="text"
            id="name"
            value={formState.name}
            onChange={handleFormChange}
          />
          <label>Email</label>
          <input
            type="email"
            id="email"
            value={formState.email}
            onChange={handleFormChange}
          />
          <label for="date">Date</label>
          <input
            type="date"
            id="date"
            value={formState.date}
            onChange={handleFormChange}
          ></input>
          <label>Course Title</label>
          <input
            type="text"
            id="title"
            value={formState.title}
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

export default RequestForm;
