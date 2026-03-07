import express from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
  console.log("PORT:");
  console.log("DATABASE_URL", process.env.DATABASE_URL);
});
