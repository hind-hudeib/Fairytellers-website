import "../css/login.css";
import React, { useState, useEffect } from "react";
import { Link, json, useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const [userInputs, setUserInputs] = useState({ email: "", password: "" });
  const [IsFound, setIsFound] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const storedUserInputs = JSON.parse(localStorage.getItem("user"));
    if (storedUserInputs) {
      setUserInputs(storedUserInputs);
    }
  }, []);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const savedUserInputs = JSON.parse(localStorage.getItem("user"));

    if (
      savedUserInputs &&
      userInputs.email === savedUserInputs.email &&
      userInputs.password === savedUserInputs.password
    ) {
      handleLogin(userInputs);
      navigate("/"); // Redirect user to the home page after successful login
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div>
      <section className="background-radial-gradient overflow-hidden pt-5">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0 welcomText">
              <h1 className="my-5 loginHeader ">
                welcome back <br />
              </h1>
              <p className="mb-4 opacity-70">
                Log in to complete your awesome work !
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="card shadow">
                <div className="card-body px-4 py-5 px-md-5" id="positionError">
                  <form id="form" onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                      <input
                        value={userInputs.email}
                        onChange={handleInputChange}
                        type="email"
                        name="email"
                        id="loginEmail"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                      <input
                        value={userInputs.password}
                        onChange={handleInputChange}
                        type="password"
                        name="password"
                        id="loginPassword"
                        className="form-control"
                        placeholder="password"
                        autoComplete="on"
                      />
                    </div>

                    <div className="text-center">
                      <button class="btn loginBtn" type="submit">
                        Login
                      </button>
                    </div>

                    <div className="text-center mt-3">
                      <p>or Login with:</p>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                    </div>

                    <div className="text-center">
                      <p>
                        Don't have an account?{" "}
                        <Link to={"/Signup"}>Sign up</Link>{" "}
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

export default Login;
