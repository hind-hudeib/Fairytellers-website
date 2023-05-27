import React, { useState, useEffect } from "react";
import "../css/storiesList.css";
import Stories from "../Json/Stories.json";
import Posts from "../component/Posts";
import Pagination from "../component/Pagination";
import StoryDetails from "./StoryDetails";

const StoriesList = ({ initialPosts }) => {
  const [selectedPost, setSelectedPost] = React.useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const handleClick = (post) => {
    setSelectedPost(post);
  };

  useEffect(() => {
    setPosts(Stories);
  }, []);

  console.log(posts);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-lg-1 col-sm-2"></div>
          <div className="col-lg-6 col-sm-8">
            <div className="group pt-5">
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input
                placeholder="Search"
                type="search"
                className="input serchBar"
              />
            </div>
          </div>
          <div className="col-lg-4 col-sm-2">
            <div className="pt-5">
              <button
                type="button"
                className="btn  dropdown-toggle dropdown-toggle-split border border-3"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="label-icon">Category</span>{" "}
                <span className="caret">&nbsp;</span>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <ul className="category_filters">
                  <li>
                    <span>ALL</span>
                  </li>
                  <li>
                    <span>Classics</span>
                  </li>
                  <li>
                    <span>Fantasy</span>
                  </li>
                  <li>
                    <span>Adventure</span>
                  </li>
                  <li>
                    <span>Crime</span>
                  </li>
                  <li>
                    <span>memoir</span>
                  </li>
                  <li>
                    <span>Detective and Mystery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {currentPosts.length > 0 ? (
        <Posts
          posts={currentPosts}
          loading={loading}
          handleClick={handleClick}
        />
      ) : (
        <h3>No posts found.</h3>
      )}
      {selectedPost && <StoryDetails post={selectedPost} />}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default StoriesList;
