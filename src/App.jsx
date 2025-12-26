import { reportData } from "./data";
import ScoreCard from "./components/ScoreCard";
import SkillBars from "./components/SkillBars";
import Feedback from "./components/Feedback";
import ScoreChart from "./components/ScoreChart";

function App() {
  return (
    <div className="container">
      <h1>Speaking Assessment Report</h1>

      <ScoreCard score={reportData.overallScore} />

      <div className="grid">
        <div className="left">
          <SkillBars skills={reportData.skills} />
        </div>

        <div className="right">
          <ScoreChart skills={reportData.skills} />
        </div>
      </div>

      <div className="feedback-section">
        <h3>Descriptive Feedback</h3>
        <Feedback title="Overall" score={reportData.overallScore} />

        {Object.entries(reportData.skills).map(([skill, score]) => (
          <Feedback key={skill} title={skill} score={score} />
        ))}
      </div>
    </div>
  );
}

export default App;
