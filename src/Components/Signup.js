import React, { useState } from "react";
import Card from "./UI/Card";
import ErrorModal from "./UI/ErrorModal";
import Button from "react-bootstrap/Button";
import classes from "./Signup.module.css";

const Signup = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [error,setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    setEnteredConfirmPassword(event.target.value);
  };
  const errorHandler = (event) => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
        enteredPassword.trim().length === 0 ||
        enteredConfirmPassword.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name, email and password (non-empty values).",
      });
      return;
    }
    if (
      
        enteredPassword.trim().length <8
        
    ) {
      setError({
        title: "Invalid Password",
        message: "Password length must be greater than 8",
      });
      return;
    }
    if (enteredPassword !== enteredConfirmPassword) {
     setError({
       title: "Password Mismatch",
       message: "Please enter the same password in both fields",
     });
     return;
    } 
      const userData = {
        username: enteredUsername,
        email: enteredEmail,
        password: enteredPassword,
      };
      console.log(userData);
      setEnteredUsername("");
      setEnteredEmail("");
      setEnteredPassword("");
      setEnteredConfirmPassword("");
    
  }
  return (
    <>
      {error && (
        <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>
      )}
    <Card className={classes.input}>
        <h1 >Sign Up</h1>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input
          type="text"
          id="username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label>Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
        <label>Re-enter Password</label>
        <input
          type="password"
          id="repassword"
          value={enteredConfirmPassword}
          onChange={confirmPasswordChangeHandler}
        />
        <br></br>
        <div class="text-center">
          <Button variant="light" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Card>
    </>
  );
};
export default Signup;
