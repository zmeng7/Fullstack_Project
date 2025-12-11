import { useParams } from 'react-router-dom';
// import products from '../data/products';
import './ProductDetail.css';
import { useNavigate } from "react-router-dom";
import React ,{ useState,useEffect }from 'react';

function ProductDetail() {
  const { id } = useParams();  
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(`http://localhost:5000/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }

    fetchProducts();
  }, [id]);  // brand 改变就重新 fetch




  if (!product) {
    return <h2>NO</h2>;
  }

  return (
    <div className="detail-container">
      <img src={`http://localhost:5000${product.image}`} alt={product.name} className="detail-img" />
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
