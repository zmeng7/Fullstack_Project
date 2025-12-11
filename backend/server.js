const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

// 连接 MongoDB（你之后换成自己的）
mongoose.connect("mongodb://127.0.0.1:27017/shoppingDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// 测试 API
app.get("/", (req, res) => {
  res.send("Backend is running!");
});


const Product = require("./Product"); // 引入模型

app.get("/api/products", async (req, res) => {
  const { brand } = req.query;

  let query = {};

  if (brand) {
    query.keywords = brand;
  }

  const products = await Product.find(query);
  res.json(products);
});


app.get("/api/products/:id", async (req, res) => {
  const productId = req.params.id;

  const product = await Product.findOne({ id: Number(productId) });

  if (!product) return res.status(404).json({ message: "Product not found" });

  res.json(product);
});



app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

