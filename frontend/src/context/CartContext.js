import { createContext, useContext, useState } from "react";

// 1. 创建一个 Context
const CartContext = createContext();

// 2. Provider（包裹整个 App）
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // 加入购物车
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        // 如果已存在，数量 +1
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      // 不存在 → 新加入
      return [...prev, { ...product, qty: 1 }];
    });
  };

   // ⭐ 计算购物车总价
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // ⭐ 计算购物车总数量（Navbar 上要显示的）
  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.qty,
    0
  );


  // 暂时不实现 remove（之后再做）
  const value = {
    cartItems,
    addToCart,
    totalPrice, 
    totalItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}



// 3. 小工具：让其他组件更好地使用 Context
export function useCart() {
  return useContext(CartContext);
}
