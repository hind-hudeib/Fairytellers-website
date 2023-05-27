import "../css/login.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleNameChange(event) {
    const { value } = event.target;
    setFullName(value);
  }
  // check email
  const [isEmailValid, setEmailError] = useState(false);
  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailError(validateEmail(value));
  };
  const validateEmail = (email) => {
    // Regular expression to match email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // check password
  const [isValidPass, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidConfirm, setIsConfirmValid] = useState(false);

  const handlePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  // check confirm password
  const handleConfirmPass = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
    setIsConfirmValid(value === password);
  };
  const handleSignup = (event) => {
    event.preventDefault();

    // Create a user object with the signup data
    const user = {
      username: fullName,
      email: email,
      password: password,
    };

    // Save the user object in local storage
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect user to the home page
    navigate("/");
  };

  return (
    <div>
      {" "}
      <section class="background-radial-gradient overflow-hidden pt-5">
        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div class="row gx-lg-5 align-items-center mb-5">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <h1 class="my-2 loginHeader">
                Get started <br />
              </h1>
              <p class="mb-4 opacity-70">
                Log in to complete your awesome work !
              </p>
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                class="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                class="position-absolute shadow-5-strong"
              ></div>

              <div class="card shadow">
                <div class="card-body px-4 py-5 px-md-5">
                  <form id="form" onSubmit={handleSignup}>
                    <div class="container">
                      <div class="row">
                        <div class="col-6">
                          <label class="form-label" for="username">
                            First name
                          </label>
                          <input
                            onChange={handleNameChange}
                            value={fullName}
                            type="text"
                            id="username"
                            name="fullName"
                            class="form-control"
                            placeholder="first name"
                          />
                        </div>
                        <div class="col-6">
                          <label class="form-label" for="lastNameInput">
                            Last name
                          </label>
                          <input
                            type="text"
                            id="lastNameInput"
                            class="form-control"
                            placeholder="last name"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="container mt-3">
                      <div class="row">
                        <div class="col-4">
                          <div class="form-group">
                            <label for="day">Day:</label>
                            <select
                              class="form-control"
                              id="day"
                              name="day"
                            ></select>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group">
                            <label for="month">Month:</label>
                            <select
                              class="form-control"
                              id="month"
                              name="month"
                            ></select>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="form-group">
                            <label for="year">Year:</label>
                            <input
                              type="text"
                              class="form-control"
                              id="year"
                              name="year"
                              placeholder="YYYY"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row mt-3">
                        <div class="col-12">
                          <div class="form-outline mb-4">
                            <label class="form-label" for="email">
                              Email address
                            </label>
                            <input
                              onChange={handleEmailChange}
                              value={email}
                              type="email"
                              id="email"
                              name="email"
                              class="form-control"
                              placeholder="Email"
                            />
                          </div>
                          <div>
                            {!isEmailValid && email !== "" && (
                              <p className="errorMessages">
                                Please enter a valid email address.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div class="row mt-3">
                        <div class="col-12">
                          <div class="form-outline mb-4">
                            <label class="form-label" for="password">
                              Password
                            </label>
                            <input
                              onChange={handlePassword}
                              value={password}
                              type="password"
                              id="password"
                              name="password"
                              class="form-control"
                              placeholder="password"
                              autocomplete="on"
                            />
                          </div>
                          <div>
                            {!isValidPass && password !== "" && (
                              <p className="errorMessages">
                                Please enter a password that is at least 8
                                characters long and contains at least one
                                lowercase letter, one uppercase letter, and one
                                number.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div class="row mt-3">
                        <div class="col-12">
                          <div class="form-outline mb-4">
                            <label class="form-label" for="password-confirm">
                              Confirm Password
                            </label>
                            <input
                              onChange={handleConfirmPass}
                              value={confirmPassword}
                              type="password"
                              id="passwordConfirm"
                              name="password-confirm"
                              class="form-control"
                              placeholder="password"
                              autocomplete="on"
                            />
                          </div>
                          <div>
                            {!isValidConfirm && confirmPassword !== "" && (
                              <p className="errorMessages">
                                The passwords do not match.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-center">
                      <button class="btn loginBtn" type="submit">
                        Signup
                      </button>
                    </div>

                    <div class="text-center mt-3">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        class="btn btn-link btn-floating mx-1"
                      >
                        <i class="fab fa-google"></i>
                      </button>
                    </div>

                    <div class="text-center">
                      <p>
                        If you already have an account,
                        <Link to={"/Login"}>Log in.</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
