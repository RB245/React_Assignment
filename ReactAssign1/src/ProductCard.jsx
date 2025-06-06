import react, { useState } from 'react';
import './ProductCard.css'
import {Link} from 'react-router-dom';

const ProductCard = ({ data }) =>{
    const [showMore, setShowMore] = useState(false);
    const description = showMore ? data.description : data.description.slice(0, 20);

    return (
        <div className="card">
            <h2>{data.title}</h2>
            <img className="box-img" src={data.thumbnail} alt={data.title} />
            <Link to={`/product/${data.id}`} className="showmore">Show More</Link>
        </div>
    );
};

export default ProductCard;