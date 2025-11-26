import iphone15Img from "../assets/images/iphone15.jpg";
import xm5Img from "../assets/images/xm5.jpg";
import echoImg from "../assets/images/echo.jpg";

import samsungImg from "../assets/images/Samsung Galaxy S23.jpg";
import dellImg from "../assets/images/Dell XPS 13 Laptop.jpg";
import watchImg from "../assets/images/Apple Watch Series 9.jpg";
import switchImg from "../assets/images/Nintendo Switch.jpg";
import canonImg from "../assets/images/Canon EOS R10 Camera.jpg";
import boseImg from "../assets/images/Bose Bluetooth Speaker.jpg";
import fitbitImg from "../assets/images/Fitbit Charge 6.jpg";
import goproImg from "../assets/images/GoPro Hero 11.jpg";
import keyboardImg from "../assets/images/Logitech Mechanical Keyboard.jpg";


const products = [
  {
    id: 1,
    name: "Iphone",
    price: 999,
    countInStock: 12,
    image: iphone15Img,
    description: "My phone",
    keywords: ["phone", "apple", "electronic"]
  },
  {
    id: 2,
    name: "Sony Headphones",
    price: 299,
    countInStock: 5,
    image: xm5Img,
    description: "Wenmiao's love",
    keywords: ["headphone", "sony", "electronic"]
  },
  {
    id: 3,
    name: "Amazon Echo",
    price: 49,
    countInStock: 20,
    image: echoImg,
    description: "My Alex",
    keywords: ["amazon", "alex", "electronic"]
  },
  {
    id: 4,
    name: "Samsung Galaxy S23",
    price: 899,
    countInStock: 20,
    image: samsungImg,
    description: "High-end Android smartphone with an advanced camera system.",
    keywords: ["electronics", "smartphone", "samsung", "android"]
  },
  {
    id: 5,
    name: "Dell XPS 13 Laptop",
    price: 1299,
    countInStock: 5,
    image: dellImg,
    description: "Ultra-thin portable laptop with stunning display and long battery life.",
    keywords: ["laptop", "computer", "electronics", "dell"]
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    price: 399,
    countInStock: 27,
    image: watchImg,
    description: "Advanced smartwatch for fitness tracking, notifications, and health monitoring.",
    keywords: ["smartwatch", "wearable", "apple", "electronics"]
  },
  {
    id: 7,
    name: "Nintendo Switch",
    price: 299,
    countInStock: 18,
    image: switchImg,
    description: "Versatile gaming console for both handheld and TV play.",
    keywords: ["gaming", "console", "nintendo", "electronics"]
  },
  {
    id: 8,
    name: "Canon EOS R10 Camera",
    price: 1199,
    countInStock: 8,
    image: canonImg,
    description: "Mirrorless camera ideal for both photography and video shooting.",
    keywords: ["camera", "photography", "canon", "electronics"]
  },
  {
    id: 9,
    name: "Bose Bluetooth Speaker",
    price: 199,
    countInStock: 31,
    image: boseImg,
    description: "Portable Bluetooth speaker with deep bass and crystal clear sound.",
    keywords: ["audio", "speaker", "bluetooth", "bose"]
  },
  {
    id: 10,
    name: "GoPro Hero 11",
    price: 499,
    countInStock: 14,
    image: goproImg,
    description: "Action camera designed for adventure, sports, and vlogging.",
    keywords: ["camera", "gopro", "action cam", "electronics"]
  },
  {
    id: 11,
    name: "Logitech Mechanical Keyboard",
    price: 149,
    countInStock: 42,
    image: keyboardImg,
    description: "High-quality mechanical keyboard with customizable switches.",
    keywords: ["keyboard", "computer", "accessory", "logitech"]
  },
  {
    id: 12,
    name: "Fitbit Charge 6",
    price: 129,
    countInStock: 50,
    image: fitbitImg,
    description: "Fitness tracker for everyday health and activity monitoring.",
    keywords: ["fitness", "wearable", "tracker", "fitbit"]
  }
];

export default products;
