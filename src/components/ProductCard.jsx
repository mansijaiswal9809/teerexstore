import React from "react";
// import { useCartContext } from '../context/cartProvider'
import "../styles/productCard.css";
// import AddToCart from './AddToCart'

const ProductCard = ({ item }) => {
  const { id, name, imageURL, price, currency, color, quantity } = item;
  // const {addToCart}=useCartContext()
  return (
    <div className="product-card-container">
      <figure>
        <img src={imageURL} alt={name} width="100%" />
      </figure>
      <div className="name-price">
        <div>{name}</div>
        <div>
          Price: {price} {currency}
        </div>
      </div>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
