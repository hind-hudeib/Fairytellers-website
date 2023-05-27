import React, { useEffect } from "react";
import "../css/recommended.css";
import story1 from "../images/book1.jpg";
import story2 from "../images/book2.jpg";
import story3 from "../images/book3.jpg";
import story4 from "../images/book4.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Recommended = () => {
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
      <section class="cid-ryh2Lb3FBX" id="image07-2i">
        <div class="container-fluid">
          <div class="row text-center ">
            <div class="col-12 p-5">
              <h3>Top Picks For You ...</h3>
            </div>
          </div>
          <div class="row">
            <div
              class="card col-lg-3 col-md-6 imageCard"
              data-aos="fade-up-right"
            >
              <div class="image-block image-block1">
                <div class="image-hover-overlay">
                  <h4 class="book-title">Book Title 1</h4>
                </div>
                <img
                  src={story1}
                  alt=""
                  className="w-100 h-100"
                  data-aos="fade-up-right"
                />
              </div>
            </div>

            <div
              class="card col-lg-3 col-md-6 imageCard"
              data-aos="zoom-out-up"
            >
              <div class="image-block image-block2">
                <div class="image-hover-overlay">
                  <h4 class="book-title">Book Title 1</h4>
                </div>
                <img
                  src={story2}
                  alt=""
                  className="w-100 h-100"
                  data-aos="zoom-out-up"
                />
              </div>
            </div>

            <div
              class="card col-lg-3 col-md-6 imageCard"
              data-aos="zoom-out-up"
            >
              <div class="image-block image-block3">
                <div class="image-hover-overlay">
                  <h4 class="book-title">Book Title 1</h4>
                </div>
                <img
                  src={story3}
                  alt=""
                  className="w-100 h-100"
                  data-aos="zoom-out-up"
                />
              </div>
            </div>

            <div
              class="card col-lg-3 col-md-6 imageCard"
              data-aos="fade-up-left"
            >
              <div class="image-block image-block4">
                <div class="image-hover-overlay">
                  <h4 class="book-title">Book Title 1</h4>
                </div>
                <img
                  src={story4}
                  alt=""
                  className="w-100 h-100"
                  data-aos="fade-up-left"
                />
              </div>
            </div>
          </div>
          <div className="row p-5">
            <div className="col-12 text-center">
              <button class="viewAll mt-2">
                <span class="hover-underline-animation">
                  {" "}
                  <Link
                    to="/StoriesList"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    View All{" "}
                  </Link>{" "}
                </span>
                <svg
                  viewBox="0 0 46 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                >
                  <path
                    transform="translate(30)"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    data-name="Path 10"
                    id="Path_10"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recommended;
