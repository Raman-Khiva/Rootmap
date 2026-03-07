import logger from "./utils/logger.js";

import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/api/health", (req, res) => {
  logger.info("HEALTH : 100%");
  res.json({ health: "100%" });
});

app.listen(5000, () => {
  logger.success("Server started successfully on port 5000");
});
