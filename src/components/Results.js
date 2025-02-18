import React from "react";
import { Link } from "react-router-dom";

const Results = (props) => {
  const { result, totalCount } = props;
  const data = Object.entries(result);

  return (
    <>
      <div>
        <h4 className="total-count">Total Count: {totalCount}</h4>
        <ul>
          {data.map(([option, count]) => (
            <li key={option} className="list-style">
              {option} : {Math.round((count * 100) / totalCount)}% ({count})
              votes
            </li>
          ))}
        </ul>
        <button className="back-home">
          <Link to={`/`} className="link white-text">
            Go to Home page
          </Link>
        </button>
      </div>
    </>
  );
};

export default Results;
