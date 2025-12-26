const SkillBars = ({ skills }) => {
  return (
    <div className="skills">
      {Object.entries(skills).map(([skill, score]) => (
        <div key={skill} className="skill-row">
          <span>{skill}</span>
          <div className="bar">
            <div
              className="fill"
              style={{ width: `${(score / 10) * 100}%` }}
            ></div>
          </div>
          <span>{score} / 10</span>
        </div>
      ))}
    </div>
  );
};

export default SkillBars;
