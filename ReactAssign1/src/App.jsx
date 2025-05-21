import react, {useEffect, useState} from 'react';
import ProductCard from './ProductCard.jsx';
import './App.css'
import Navbar from './Navbar.jsx'

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetch('https://dummyjson.com/products?limit=194&skip=0')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
// console.log(data);
  return (
    <div className="app">
      <Navbar/>
      <h1>Products Display</h1>
      <div className="product-disp">
        {products.map(product => (
          <ProductCard key={product.id} data={product}/>
        ))} 
        {/*pehle evaluate then render */}
      </div>
    </div>
  );
}

export default App;
