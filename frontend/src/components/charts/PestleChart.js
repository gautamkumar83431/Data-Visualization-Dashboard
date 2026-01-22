import { Doughnut } from "react-chartjs-2";
import { groupByKey } from "../../utils/dataTransform.js";

function PestleChart({ data }) {
  const { labels, values } = groupByKey(data, "pestle", "intensity");

  return (
    <Doughnut
      data={{
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: [
              "#ef4444",
              "#22c55e",
              "#6366f1",
              "#f97316",
            ],
          },
        ],
      }}
    />
  );
}

export default PestleChart;
