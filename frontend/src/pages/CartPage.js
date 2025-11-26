import React from "react";
import { useCart } from "../context/CartContext";
// import "./CartPage.css"; // 之后你可以自己写样式

function CartPage() {
  const { cartItems } = useCart();

  const {totalPrice} = useCart();

  if (cartItems.length === 0) {
    return <h2 style={{ padding: "20px" }}>购物车是空的~</h2>;
  }

  return (
    <div className="cart-container">
      <h1>购物车</h1>

      <div className="cart-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-img" />

            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>单价：${item.price}</p>
              <p>数量：{item.qty}</p>
              <p>小计：${item.price * item.qty}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h2>总价：${totalPrice}</h2>
      </div>
    </div>
  );
}

export default CartPage;
