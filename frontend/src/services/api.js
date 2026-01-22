export const fetchInsights = async () => {
    const res = await fetch("http://localhost:5000/api/insights");
    return res.json();
  };
  