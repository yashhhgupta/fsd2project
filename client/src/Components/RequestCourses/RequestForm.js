import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Footer from "../UI/Footer";
import Navb from "../UI/Navb";
import classes from "./RequestForm.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialFormState = {
  name: "",
  email: "",
  title: "",
  text: "",
  description: "",
  image: "",
};

const RequestForm = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [img,setImg] = useState(null)
  const [error, setError] = useState();
  const navigate = useNavigate();
  const image = useRef()
  const postImageHandler =(e)=>{
    setImg(URL.createObjectURL(e.target.files[0]))
  }
  const formData = new FormData()
  const handleFormChange = (e) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [e.target.id]: e.target.value
    }));
    // console.log(e.target.name);
  };

  const handleFormFile = (e) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      'course_img': e.target.files[0]
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
      formState.text.trim().length === 0 ||
      formState.title.trim().length === 0 ||
      formState.description.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name, email , text and course details.",
        buttontxt: "Okay",
      });
      return;
    }

    // console.log(userData);
    setFormState(initialFormState);
    formData.append("course_img",image.current.files[0])
    formData.append("name", formState.name)
    formData.append("email", formState.email)
    formData.append("title", formState.title)
    formData.append("text",formState.text)
    formData.append( "description",formState.description)
    // formData.append("user",userData)
    // fetch("https://howtobasic.onrender.com/requestedCourses", {
    //   method: "POST",
    //   // body: JSON.stringify(userData),
    //   headers: { "Content-Type": "application/json" },
    // });
  
    axios.post("https://howtobasic.onrender.com/requestedCourses",formData)
    .then(res=>{
      console.log(res)
      const userData = {
        // image:img,
        name: formState.name,
        email: formState.email,
        title: formState.title,
        text: formState.text,
        description: formState.description,
        image: res.data.course.imageUrl
      };
      navigate("/Message", { state: userData });
    })


  };

  return (
    <>
      <Navb></Navb>
      <div>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
            buttontxt={error.buttontxt}
          ></ErrorModal>
        )}

        <Card className={classes.input}>
          <div className={classes.header}>
            <h1>Request a Course</h1>
          </div>
          <form onSubmit={handleFormSubmit} enctype="multipart/form-data">
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
            <label>Course Image URL</label>
            <input
              type="file"
              id="image"
              onChange={setImg}
              // placeholder="Enter URL of image"
              // value={formState.image}
              ref ={image}
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
              <Button variant="info" type="submit" className={classes.Button}>
                Submit
              </Button>
            </div>
          </form>
        </Card>
      </div>
      <Footer></Footer>
    </>
  );
};

export default RequestForm;
