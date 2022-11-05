import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import productRoutes from "./routes/productsRoute";
import connectDB from "./config/db";

const app = express();

app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.status(200).json("API running");
});

app.use("/api/v1/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Listening on ${PORT}`);
});
