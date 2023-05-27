import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./assets/pages/Home";
import Header from "./assets/Layout/Header";
import Footer from "./assets/Layout/Footer";
import Login from "./assets/pages/Login";
import Signup from "./assets/pages/Signup";
import StoriesList from "./assets/pages/StoriesList";
import BackToTopButton from "./assets/component/BackToTopButton";
import About from "./assets/pages/About";
import Write from "./assets/pages/Write";
import StoryDetails from "./assets/pages/StoryDetails";
import ContactUs from "./assets/pages/ContactUs";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (userInputs) => {
    // Perform validation here to check if the login information is correct
    const savedUserInputs = JSON.parse(localStorage.getItem("user"));
    const isLoginValid =
      savedUserInputs &&
      userInputs.email === savedUserInputs.email &&
      userInputs.password === savedUserInputs.password;

    if (isLoginValid) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid login credentials"); // Display an error message
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    setLoading(true);
    // Simulating an asynchronous data fetch
    setTimeout(() => {
      setPosts(posts);
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/StoriesList" element={<StoriesList />} />
          <Route path="/write" element={<Write />} />
          <Route path="/About" element={<About />} />
          <Route path="/story/:id" element={<StoryDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <BackToTopButton />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
