import { Bar } from "react-chartjs-2";
import { groupByKey } from "../../utils/dataTransform.js";

function RegionChart({ data }) {
  const { labels, values } = groupByKey(data, "region", "likelihood");

  return (
    <Bar
      data={{
        labels,
        datasets: [
          {
            label: "Likelihood by Region",
            data: values,
            backgroundColor: "#f59e0b",
          },
        ],
      }}
    />
  );
}

export default RegionChart;
