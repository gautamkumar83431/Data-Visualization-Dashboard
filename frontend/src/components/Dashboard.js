
import { useEffect, useState } from "react";
import { fetchInsights } from "../services/api.js";
import SectorIntensityChart from "./charts/SectorIntensityChart.js";
import TopicPieChart from "./charts/TopicPieChart.js";
import RegionChart from "./charts/RegionChart.js";
import PestleChart from "./charts/PestleChart.js";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInsights()
      .then(res => {
        setData(res);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch insights:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        📊 Insights Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <SectorIntensityChart data={data} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <TopicPieChart data={data} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <RegionChart data={data} />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <PestleChart data={data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
