import React, { useEffect } from "react";
import "../css/aboutUs.css";
import writeImg from "../images/writer.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
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
  return (
    <>
      <section className="aboutSection">
        <div className="container-fluid pt-5">
          <div className="row p-5">
            <div className="col-2"></div>
            <div className="col-8 text-center p-5">
              <h1 className="mb-5">About Fairytellers</h1>
              <p>
                an online sanctuary where imaginations take flight and tales
                come alive. Here, within the virtual realms of infinite
                possibilities, we invite you to unleash the creative depths of
                your mind and embark on a literary journey like no other.
                Whether you are an aspiring author, an avid reader, or simply a
                dreamer with stories waiting to be told, this vibrant community
                embraces all who share a passion for storytelling.
              </p>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 p-5">
              <img
                src={writeImg}
                alt=""
                className="w-75 rounded"
                data-aos="fade-up-right"
              />
            </div>
            <div
              className="col-lg-6 col-sm-12 p-5 d-flex flex-column align-items-start justify-content-center "
              data-aos="fade-up-left"
            >
              <h2 data-aos="fade-up-left">Our Vision</h2>
              <p data-aos="fade-up-left">
                At Fairytellers , our vision is to create an online sanctuary
                that serves as a haven for storytellers from all walks of life.
                We believe in the power of storytelling to ignite imaginations,
                foster connections, and inspire profound emotions. Our vision is
                to cultivate a vibrant and inclusive community where creativity
                thrives and stories become a bridge between diverse minds and
                hearts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="features p-5 m-2 ">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-sm-12 p-5 d-flex flex-column justify-content-center "
              data-aos="fade-up-right"
            >
              <hr className="purple-line" />

              <h4>Security</h4>
              <p>
                We are committed to maintaining a secure platform where you can
                focus on your creativity and connect with fellow storytellers
                with confidence.
              </p>
            </div>
            <div
              className="col-lg-4 col-sm-12 p-5 d-flex flex-column justify-content-center "
              data-aos="zoom-out-up"
            >
              <hr className="purple-line" />

              <h4>Respect </h4>
              <p>
                Respect is at the core of our values and community guidelines so
                together, let us foster an environment where every voice is
                heard, valued, and respected.
              </p>
            </div>
            <div
              className="col-lg-4 col-sm-12 p-5 d-flex flex-column justify-content-center "
              data-aos="fade-up-left"
            >
              <hr className="purple-line" />

              <h4>Communication </h4>
              <p>
                We have created a platform that encourages meaningful
                interactions, vibrant discussions, and the exchange of ideas. We
                provide various avenues for communication
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
