import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const ScoreChart = ({ skills }) => {
  const data = {
    labels: Object.keys(skills),
    datasets: [
      {
        label: "Skill Scores",
        data: Object.values(skills),
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        borderColor: "#2563eb",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 9,
        ticks: { stepSize: 1 },
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default ScoreChart;
