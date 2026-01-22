import React from "react";
import { Bar } from "react-chartjs-2";

function IntensityChart({ data }) {
  const chartData = {
    labels: data.map(d => d.country),
    datasets: [
      {
        label: "Intensity",
        data: data.map(d => d.intensity),
        backgroundColor: "rgba(75,192,192,0.6)"
      }
    ]
  };

  return <Bar data={chartData} />;
}

export default IntensityChart;
