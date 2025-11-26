import React from 'react';

import './ProductCard.css'; // 等下写样式
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" />

      <h2 className="card-title">{product.name}</h2>
      <p className="card-price">${product.price}</p>
      <p className="card-stock">库存: {product.countInStock}</p>
      <button
        type="botton"
        className="card-add-btn"
        onClick={(e) => {
            e.preventDefault();   // 防止按钮的点击触发 Link 的跳转
            addToCart(product);
          }}
        >
        加入购物车
        </button>    
    </div>
    </Link>
);
}

export default ProductCard;
