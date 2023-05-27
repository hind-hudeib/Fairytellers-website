import React, { useEffect } from "react";
import "../css/heroslider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  faFilm,
  faTv,
  faBook,
  faPen,
  faBookOpenReader,
  faTrophy,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { MDBCardLink } from "mdb-react-ui-kit";

const HeroSlider = () => {
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
  const scrollToNextSection = () => {
    const nextSection = document.querySelector(".section-after-hero");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section id="landing">
        <div class="container-fluid pt-5 hero-container">
          <div class="row pt-5 mt-5">
            <div class="col-12 d-flex justify-content-center text-center">
              <h1 class="anim-typewriter heroHeader pt-5">
                Hi, we're fairytellers.
              </h1>
            </div>
          </div>

          <div class="row">
            <div class="col-12 d-flex justify-content-center text-center">
              <p class="mt-2 subTittle">
                A platform that allows you to share your stories and ideas with
                others
                <br />
                and read their stories!
              </p>
            </div>
          </div>

          <div class="row justify-items-start p-3">
            <div class="col-12 text-center pt-3">
              <div class="m-4">
                <Link class="fancy m-3" to={"/StoriesList"}>
                  <span class="top-key"></span>
                  <span class="text">Start reading</span>
                  <span class="bottom-key-1"></span>
                  <span class="bottom-key-2"></span>
                </Link>
                <Link class="fancy m-3" to={"/write"}>
                  <span class="top-key"></span>
                  <span class="text">Start writing</span>
                  <span class="bottom-key-1"></span>
                  <span class="bottom-key-2"></span>
                </Link>
              </div>
            </div>
          </div>
          <div class="row justify-items-start p-3">
            <div class="col-12 text-center pt-5">
              <a href="#features" onClick={scrollToNextSection}>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size="3x"
                  style={{ color: "#ffffff" }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="features">
        <div class="container">
          <div class="row text-center pt-5">
            <div class="col-12 p-5">
              <h3>See Your Story...</h3>
            </div>
          </div>
          <div class="row text-center mb-5">
            <div class="col-lg-4 ">
              <FontAwesomeIcon
                icon={faFilm}
                size="2x"
                style={{ color: "#283244" }}
              />
              <p className="mt-4">Get produced to movie or film</p>
            </div>
            <div class="col-lg-4">
              <FontAwesomeIcon
                icon={faTv}
                size="2x"
                style={{ color: "#283244" }}
              />
              <p className="mt-4">Get adapted to a TV series</p>
            </div>
            <div class="col-lg-4 ">
              <FontAwesomeIcon
                icon={faBook}
                size="2x"
                style={{ color: "#283244" }}
              />
              <p className="mt-4">Get published</p>
            </div>
          </div>
        </div>
      </section>
      <section id="howItWork">
        <div class="container p-5">
          <div class="row text-center">
            <div class="col-12 mb-5">
              <h3 class="darkBgTitel">How fairytellers Works</h3>
            </div>
          </div>
          <div class="row justify-items-center">
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="card " data-aos="fade-up-right">
                <div class="card-content">
                  <div class="card-body" data-aos="fade-up-right">
                    <div class="media d-flex">
                      <div class="align-self-center"></div>
                      <div class="media-body" data-aos="fade-up-right">
                        <h3 className="d-inline-block m-2 ">Create</h3>
                        <FontAwesomeIcon
                          icon={faPen}
                          size="2x"
                          style={{ color: "#283244" }}
                        />
                        <p>
                          Share your unique voice and original story with others
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="card " data-aos="zoom-out-up">
                <div class="card-content">
                  <div class="card-body" data-aos="zoom-out-up">
                    <div class="media d-flex">
                      <div class="align-self-center">
                        <i class="icon-speech warning font-large-2 float-left"></i>
                      </div>
                      <div
                        class="media-body text-right "
                        data-aos="zoom-out-up"
                      >
                        <h3 className="d-inline-block m-2">Build</h3>
                        <FontAwesomeIcon
                          icon={faBookOpenReader}
                          size="2x"
                          style={{ color: "#283244" }}
                        />
                        <p>
                          Establish a global fan base as your story gains
                          readership
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="card " data-aos="fade-up-left">
                <div class="card-content">
                  <div class="card-body" data-aos="fade-up-left">
                    <div class="media d-flex">
                      <div class="align-self-center">
                        <div
                          class="media-body text-right"
                          data-aos="fade-up-left"
                        >
                          <h3 className="d-inline-block m-2">compete</h3>
                          <FontAwesomeIcon
                            icon={faTrophy}
                            size="2x"
                            style={{ color: "#283244" }}
                          />
                          <p>
                            Share your work in with others and win competitions
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
