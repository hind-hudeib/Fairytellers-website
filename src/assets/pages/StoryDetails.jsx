import React from "react";
import { useLocation } from "react-router-dom";
import Stories from "../Json/Stories.json";
import "../css/storyDetails.css";
const StoryDetails = () => {
  const location = useLocation();
  const id = parseInt(location.pathname.replace("/story/", ""));
  const post = Stories.find((post) => post.id === id);

  console.log("id:", id);
  console.log("Stories:", Stories);

  if (!post) {
    return <h3>Post not found.</h3>;
  }

  return (
    <>
      <div className=" container-fluid story-Details-Container">
        <div className="row storyHeader pt-5">
          <div className="col-6 p-5 d-flex align-items-center justify-content-center">
            <img
              src={post.img}
              alt={post.title}
              className="storyDetailsImg rounded-circle"
            />
          </div>

          <div className="col-6 d-flex flex-column align-items-start justify-content-center">
            <blockquote>
              <h1 className="storyTitle">{post.title}</h1>
              <p className="authorName">{post.author}</p>
            </blockquote>
            <span className="category p-1 mt-5 border rounded">
              {post.category}
            </span>
          </div>
        </div>
      </div>

      <div className="post-details">
        <div className="container-fluid storyDiv"></div>
      </div>
    </>
  );
};

export default StoryDetails;
