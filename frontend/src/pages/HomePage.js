
import FilterSidebar from '../components/FilterSidebar';
import React ,{ useState }from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import './HomePage.css';

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
  const totalPages = Math.ceil(products.length / productsPerPage);



  return (
    <div className="home-layout">
      <FilterSidebar />

      <div className="product-area">

        <div className="page-container">
          <h1>产品列表</h1>

          <div className="product-grid">

            {currentProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}        
          </div>

          <div className="pagination">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              &lt;
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default HomePage;
