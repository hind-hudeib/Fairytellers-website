import React, { useState, useEffect } from "react";
import "../css/contactus.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-out",
      delay: 20,
    });

    return () => {
      AOS.refresh();
    };
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <section className="contactSection">
        <div className="container-fluid contact-header pt-5 ">
          <div className="row pt-5">
            <div className="col-12 text-center pt-5 pb-3">
              <h1 className="contactTitle">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container mt-4 mb-4">
          <div className="row justify-content-center">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="card shadow w-100 " data-aos="zoom-in-up">
                <div className="card-body px-4 py-5 px-md-5" id="positionError">
                  <form id="form">
                    <div className="info-wrap contactInfo w-100 pb-5">
                      <h2 className="pb-2">Let's get in touch</h2>
                      <p className="mb-4">
                        We're open for any suggestion or just to have a chat
                      </p>
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="contactUsName">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="contactUsName"
                        className="form-control"
                        placeholder="enter your full name"
                        onChange={handleNameChange}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="loginEmail">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="loginEmail"
                        className="form-control"
                        placeholder="Email"
                        onChange={handleEmailChange}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="form-control"
                        value={message}
                        onChange={handleMessageChange}
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button className="btn loginBtn" type="submit">
                        Send
                      </button>
                    </div>
                  </form>
                </div>{" "}
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
