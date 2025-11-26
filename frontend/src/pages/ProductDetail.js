import { useParams } from 'react-router-dom';
import products from '../data/products';
import './ProductDetail.css';
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();  
  const product = products.find((p) => p.id === Number(id));
  const navigate = useNavigate();

  if (!product) {
    return <h2>Unavailable product</h2>;
  }

  return (
    <div className="detail-container">
      <img src={product.image} alt={product.name} className="detail-img" />

      <div className="detail-info">
        <h1>{product.name}</h1>
        <p className="detail-price">价格: ${product.price}</p>
        <p className="detail-stock">库存: {product.countInStock}</p>
        <p className="detail-desc">{product.description}</p>
        <button onClick={() => navigate("/")}>
        返回首页
        </button>
      </div>
    </div>




  );
}

export default ProductDetail;
