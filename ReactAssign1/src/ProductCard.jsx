import react from 'react';
import './ProductCard.css'
const ProductCard = ({ data }) =>{
    return (
        <div className="card">
            <img className="box-img" src={data.thumbnail} alt={data.title} />
            <h2>{data.title}</h2>
            <p><b>Price: </b>₹{data.price} ({data.discountPercentage}% off)</p>
            <p><b>Brand: </b>{data.brand}</p>
            <p><b>Stock: </b>{data.availabilityStatus}</p>
        </div>
    );
};

export default ProductCard;