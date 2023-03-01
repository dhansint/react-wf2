import React from 'react';
import ScoreManager from './ScoreManager';

const ScoreBoard = () => {
  const [score, setScore] = React.useState(0);
  const [goal, setGoal] = React.useState(0);

  const newScore = (event) => {
    setScore(score + 1);
    setGoal(goal + 1);
  };
  return (
    <div>
      <p>Score: {score}</p>
      <p>Goal: {goal}</p>
      <ScoreManager newScore={newScore} score={score} goal={goal} />
    </div>
  );
};

export default ScoreBoard;
