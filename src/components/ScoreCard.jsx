const ScoreCard = ({ score }) => {
  return (
    <div className="score-card">
      <h2>Overall Speaking Score</h2>
      <div className="score-circle">
        <span>{score}</span>
        <small>/10</small>
      </div>
    </div>
  );
};

export default ScoreCard;
