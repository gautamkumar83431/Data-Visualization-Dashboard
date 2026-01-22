import Insight from "../models/Insight.js";

export const getInsights = async (req, res) => {
  const query = {};

  if (req.query.sector) query.sector = req.query.sector;
  if (req.query.region) query.region = req.query.region;
  if (req.query.topic) query.topic = req.query.topic;

  const data = await Insight.find(query);
  res.json(data);
};

export const getSectorIntensity = async (req, res) => {
  const data = await Insight.aggregate([
    {
      $group: {
        _id: "$sector",
        totalIntensity: { $sum: "$intensity" }
      }
    }
  ]);
  res.json(data);
};
