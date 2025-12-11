const mongoose = require("mongoose");
const Product = require("./Product");

mongoose
  .connect("mongodb://127.0.0.1:27017/shoppingDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));



const products = [
  {
    id: 1,
    name: "Iphone",
    price: 999,
    countInStock: 12,
    image: "/uploads/iphone15.jpg",
    description: "My phone",
    keywords: ["phone", "apple", "electronic"]
  },
  {
    id: 2,
    name: "Sony Headphones",
    price: 299,
    countInStock: 5,
    image: "/uploads/xm5.jpg",
    description: "Wenmiao's love",
    keywords: ["headphone", "sony", "electronic"]
  },
  {
    id: 3,
    name: "Amazon Echo",
    price: 49,
    countInStock: 20,
    image: "/uploads/echo.jpg",
    description: "My Alex",
    keywords: ["amazon", "alex", "electronic"]
  },
  {
    id: 4,
    name: "Samsung Galaxy S23",
    price: 899,
    countInStock: 20,
    image: "/uploads/Samsung Galaxy S23.jpg",
    description: "High-end Android smartphone with an advanced camera system.",
    keywords: ["electronics", "smartphone", "samsung", "android"]
  },
  {
    id: 5,
    name: "Dell XPS 13 Laptop",
    price: 1299,
    countInStock: 5,
    image: "/uploads/Dell XPS 13 Laptop.jpg",
    description: "Ultra-thin portable laptop with stunning display and long battery life.",
    keywords: ["laptop", "computer", "electronics", "dell"]
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    price: 399,
    countInStock: 27,
    image: "/uploads/Apple Watch Series 9.jpg",
    description: "Advanced smartwatch for fitness tracking, notifications, and health monitoring.",
    keywords: ["smartwatch", "wearable", "apple", "electronics"]
  },
  {
    id: 7,
    name: "Nintendo Switch",
    price: 299,
    countInStock: 18,
    image: "/uploads/Nintendo Switch.jpg",
    description: "Versatile gaming console for both handheld and TV play.",
    keywords: ["gaming", "console", "nintendo", "electronics"]
  },
  {
    id: 8,
    name: "Canon EOS R10 Camera",
    price: 1199,
    countInStock: 8,
    image: "/uploads/Canon EOS R10 Camera.jpg",
    description: "Mirrorless camera ideal for both photography and video shooting.",
    keywords: ["camera", "photography", "canon", "electronics"]
  },
  {
    id: 9,
    name: "Bose Bluetooth Speaker",
    price: 199,
    countInStock: 31,
    image: "/uploads/Bose Bluetooth Speaker.jpg",
    description: "Portable Bluetooth speaker with deep bass and crystal clear sound.",
    keywords: ["audio", "speaker", "bluetooth", "bose"]
  },
  {
    id: 10,
    name: "GoPro Hero 11",
    price: 499,
    countInStock: 14,
    image: "/uploads/GoPro Hero 11.jpg",
    description: "Action camera designed for adventure, sports, and vlogging.",
    keywords: ["camera", "gopro", "action cam", "electronics"]
  },
  {
    id: 11,
    name: "Logitech Mechanical Keyboard",
    price: 149,
    countInStock: 42,
    image: "/uploads/Logitech Mechanical Keyboard.jpg",
    description: "High-quality mechanical keyboard with customizable switches.",
    keywords: ["keyboard", "computer", "accessory", "logitech"]
  },
  {
    id: 12,
    name: "Fitbit Charge 6",
    price: 129,
    countInStock: 50,
    image: "/uploads/Fitbit Charge 6.jpg",
    description: "Fitness tracker for everyday health and activity monitoring.",
    keywords: ["fitness", "wearable", "tracker", "fitbit"]
  }
];



  

async function seed() {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Data imported!");
  process.exit();
}

seed();
