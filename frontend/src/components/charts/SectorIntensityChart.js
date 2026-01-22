import { Bar } from "react-chartjs-2";
import { groupByKey } from "../../utils/dataTransform.js";

function SectorIntensityChart({ data }) {
  const { labels, values } = groupByKey(data, "sector", "intensity");

  return (
    <Bar
      data={{
        labels,
        datasets: [
          {
            label: "Intensity by Sector",
            data: values,
            backgroundColor: "#6366f1",
          },
        ],
      }}
    />
  );
}

export default SectorIntensityChart;
