const getFeedback = (score) => {
  if (score >= 8) return "Excellent performance with strong control.";
  if (score >= 6) return "Good performance with minor inaccuracies.";
  return "Needs improvement.";
};

const Feedback = ({ title, score }) => {
  return (
    <div className="feedback-box">
      <h4>{title}</h4>
      <p>{getFeedback(score)}</p>
    </div>
  );
};

export default Feedback;
