import react, { useState } from 'react';
import './ProductCard.css'
const ProductCard = ({ data }) =>{
    const [showMore, setShowMore] = useState(false);
    const description = showMore ? data.description : data.description.slice(0, 20);

    return (
        <div className="card">
            <img className="box-img" src={data.thumbnail} alt={data.title} />
            <h2>{data.title}</h2>
            <p><b>Description: </b>{description}..
                <button className="showmore" onClick={() =>setShowMore(!showMore)}>
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
            </p>
            <p><b>Price: </b>₹{data.price} ({data.discountPercentage}% off)</p>
            <p><b>Brand: </b>{data.brand}</p>
            <p><b>Stock: </b>{data.availabilityStatus}</p>
        </div>
    );
};

export default ProductCard;