import express from "express";
import { getInsights, getSectorIntensity } from "../controllers/insightController.js";

const router = express.Router();

router.get("/", getInsights);
router.get("/sector-intensity", getSectorIntensity);

export default router;
