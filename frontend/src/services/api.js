<<<<<<< HEAD

=======
>>>>>>> 50bb4af85e377f84a2722cd422a2105a9d5c2835
const BASE_URL = "https://data-visualization-dashboard-qhpk.onrender.com";

export const fetchInsights = async () => {
  const res = await fetch(`${BASE_URL}/api/insights`);
  return res.json();
};
