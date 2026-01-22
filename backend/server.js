import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import insightRoutes from "./routes/insightRoutes.js";

dotenv.config();
connectDB();

const app = express();
<<<<<<< HEAD

=======
>>>>>>> 50bb4af85e377f84a2722cd422a2105a9d5c2835
app.use(cors({
  origin: "*"
}));
app.use(express.json());

app.use("/api/insights", insightRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
