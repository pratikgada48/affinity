import React, { useState } from "react";
import { pollHobby } from "../constants";
import Results from "./Results";

const PollHobbies = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [vote, setVote] = useState(!selectedOption);
  const [result, setResult] = useState({});
  const [totalCount, setTotalCount] = useState(0);

  const handleChange = (val) => {
    setSelectedOption(val);
    setVote(!selectedOption);
  };

  const handleVote = () => {
    setResult((prevState) => ({
      ...prevState,
      [selectedOption]: (prevState[selectedOption] || 0) + 1,
    }));
    setTotalCount((prevState) => prevState + 1);
    setVote(!selectedOption);
  };

  return (
    <>
      <div className="poll-container">
        <h3>Let's start Voting.!</h3>
        <div className="poll-question">{pollHobby?.question}</div>
        <div className="poll-options">
          {pollHobby.options.map((item, i) => (
            <div
              key={i}
              className={`answer ${selectedOption === item ? " selected" : ""}`}
              onClick={(e) => handleChange(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="voteBtn"
          onClick={handleVote}
          disabled={vote}
        >
          Vote
        </button>
        <Results result={result} totalCount={totalCount} />
      </div>
    </>
  );
};

export default PollHobbies;
