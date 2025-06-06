import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const ProductDetails = () =>{
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() =>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [id]);

    if(!product) return <p>Loading...</p>

    return (
        <div className="detail-page">
        <h1>{product.title}</h1>
        <img src={product.thumbnail} alt={product.title} />
        <p>{product.description}</p>
        <p><b>Price:</b> ₹{product.price}</p>
        <p><b>Brand:</b> {product.brand}</p>
        <p><b>Rating:</b> {product.rating}</p>
    </div>
    );
};

export default ProductDetails;