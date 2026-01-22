
const BASE_URL = "https://data-visualization-dashboard-qhpk.onrender.com";

export const fetchInsights = async () => {
  const res = await fetch(`${BASE_URL}/api/insights`);
  return res.json();
};
