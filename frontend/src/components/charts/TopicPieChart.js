import { Pie } from "react-chartjs-2";
import { groupByKey } from "../../utils/dataTransform.js";

function TopicPieChart({ data }) {
  const { labels, values } = groupByKey(data, "topic", "intensity");

  return (
    <Pie
      data={{
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: [
              "#22c55e",
              "#f97316",
              "#3b82f6",
              "#ec4899",
            ],
          },
        ],
      }}
    />
  );
}

export default TopicPieChart;
