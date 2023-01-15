import React from 'react'
import '../styles/productCard.css'

const ProductCard = ({id,name,imageURL,type,price,currency,color,gender,quantity}) => {
  return (
    <div className='product-card-container'>
      <figure>
        <img src={imageURL} alt={name} width="100%" />
      </figure>
      <div  className='name-price'>
      <div>{name}</div>
        <div>Price: {price} {currency}</div>
      </div>
        <button className='add-to-cart-button'>Add to Cart</button>
    </div>
  )
}

export default ProductCard
// "id": 1,
// "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png",
// "name": "Black Polo",
// "type": "Polo",
// "price": 250,
// "currency": "INR",
// "color": "Black",
// "gender": "Men",
// "quantity": 3
