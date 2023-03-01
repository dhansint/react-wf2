import React from 'react';

const ScoreManager = (props, { score, goal }) => {
  const resetScore = (event) => {
    score = 0;
    goal = 0;
  };
  return (
    <div>
      <button onClick={props.newScore}> Add Score </button>
      <button onClick={resetScore}> Reset Score </button>
    </div>
  );
};
export default ScoreManager;
