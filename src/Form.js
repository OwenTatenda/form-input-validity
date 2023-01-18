import classes from "./Form.module.css";
import React, { useCallback, useEffect, useState } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";

const Form = () => {
  const [username, setUserName] = useState("");
  const [usernameValid, setUserNameValid] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(null);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(null);
  const [age, setAge] = useState("");
  const [ageValid, setAgeValid] = useState(null);
  const [formIsValid, setFormIsValid] = useState(false);

  const usernameHandler = (e) => {
    setUserName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const nameBlurInput = (e) => {
    setUserNameValid(true);
    if (username.trim() === "") {
      setUserNameValid(false);
      return;
    }
  };
  const passwordBlurInput = (e) => {
    setPasswordValid(true);
    if (password.length < 6) {
      setPasswordValid(false);
      return;
    }
  };
  const emailBlurInput = (e) => {
    setEmailValid(true);
    if (!email.includes("@")) {
      setEmailValid((prev) => {
        return false;
      });
      return;
    }
  };
  const ageBlurInput = (e) => {
    setAgeValid(true);
    if (age < 1) {
      setAgeValid((prev) => {
        return false;
      });
      return;
    }
  };

  useEffect(() => {
    if (
      username.trim().length !== "" &&
      password.trim().length > 6 &&
      email.trim().includes("@") &&
      age.trim() > 0
    ) {
      setFormIsValid((prev) => {
        return true;
      });
    } else {
    }
  }, [username, password, email, age]);

  return (
    <form action="" className={classes.form}>
      <label htmlFor="username">Username</label>
      <input
        className={usernameValid !== false ? "" : classes["input-blur"]}
        type="text"
        id="username"
        value={username}
        onChange={usernameHandler}
        onBlur={nameBlurInput}
      />
      {usernameValid === false && (
        <p className={classes.name}>Name must not be empty</p>
      )}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        className={passwordValid !== false ? "" : classes["input-blur"]}
        id="password"
        value={password}
        onChange={passwordHandler}
        onBlur={passwordBlurInput}
      />
      {passwordValid === false && (
        <p className={classes.password}>Password too short!</p>
      )}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={email}
        onChange={emailHandler}
        className={emailValid !== false ? "" : classes["input-blur"]}
        onBlur={emailBlurInput}
      />
      {emailValid === false && (
        <p className={classes.email}>Email must include @</p>
      )}
      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={ageHandler}
        className={ageValid !== false ? "" : classes["input-blur"]}
        onBlur={ageBlurInput}
      />
      {ageValid === false && <p className={classes.age}>Age is too small</p>}
      <button
        className={`${classes.button} ${formIsValid ? classes.isValid : ""}`}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
