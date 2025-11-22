import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productsRouter from "./routes/products/get-products.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:8081",
    credentials: true,
  })
);
app.use(express.json());


app.use("/api/products", productsRouter);

const server = app.listen(PORT, () => {
  console.log("API running on port " + PORT, "PID", process.pid);
});

server.on("close", () => {
  console.log("HTTP server closed");
});

server.on("error", (err) => {
  console.error("HTTP server error:", err);
});
