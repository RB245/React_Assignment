import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard.jsx';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=194&skip=0')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error('Error:', err));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const Prev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const Next = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div class="main-section">
      <h1 className="heading"></h1>
      <div className="product-disp">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>

      <div className="pagination">
        <button onClick={Prev} disabled={currentPage === 1}>Previous</button>
        <span className="page-indicator">Page {currentPage} of {totalPages}</span>
        <button onClick={Next} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default Home;
