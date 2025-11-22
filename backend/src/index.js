import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productsRouter from "./routes/products/get-products.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use("/api/products", productsRouter);

app.listen(PORT, () => {
  console.log("API running on port " + PORT);
});
