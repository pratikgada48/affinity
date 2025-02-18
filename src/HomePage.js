import React from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <>
      <div className="homepage-container">
        <h3>Choose your Polling option</h3>
        <div className="code-option">
          <Link to={`/poll-code`} className="link option-link">
            Poll Code
          </Link>
          &nbsp;&nbsp;
          <Link to={`/poll-hobby`} className="link option-link">
            Poll Hobby
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
