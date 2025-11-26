import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


function Navbar() {
  const { cartItems } = useCart();
  const { totalItems } = useCart();
  const {totalPrice} = useCart();
  return (
    <div className="navbar">
      <div className="nav-logo">TAOBAO</div>

      <div className="nav-search">
        <input placeholder="搜索产品…" />
        <button>搜索</button>
      </div>

      <div className="nav-links">
        
        
        <Link to="/cart">
          购物车({totalItems})
        </Link>

        
      </div>
    </div>
  );
}

export default Navbar;
