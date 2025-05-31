import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
// import ProductCard from './ProductCard.jsx';
import './App.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Home from './pages/Home.jsx';
import Offers from './pages/Offers.jsx';

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 12;

//   useEffect(() =>{
//     fetch('https://dummyjson.com/products?limit=194&skip=0')
//       .then((response) => response.json())
//       .then((data) => setProducts(data.products))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);
// // console.log(data);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const paginatedProducts = products.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(products.length / itemsPerPage);
  
//   const Prev = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const Next = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };
//   return (
//     <div className="app">
//       <Navbar/>
//         <h1 className='heading'>Daily Bazaar</h1>
//         <div className="product-disp">
//           {/* {products.map(product => (
//             <ProductCard key={product.id} data={product}/>
//           ))}  */}
//           {paginatedProducts.map((product) => (
//             <ProductCard key={product.id} data={product} />
//           ))}
//           {/*pehle evaluate then render */}
//       </div>

//       <div className="pagination">
//         <button onClick={Prev} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <span className="page-indicator">Page {currentPage} of {totalPages}</span>
//         <button onClick={Next} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>

//       <Footer/>
//     </div>
//   );
// }

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/offers" element={<Offers />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
