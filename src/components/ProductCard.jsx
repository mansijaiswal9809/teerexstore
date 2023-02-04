import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/CartSlice";

const ProductCard = ({ item }) => {
  // console.log(all)
  const { id, name, imageURL, price, currency, quantity } = item;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addInYourCart = (id, price, quantity, name, imageURL) => {
    dispatch(addToCart({ id, price, quantity, name, imageURL }));
    navigate("/cart");
  };
  return (
    <div className=" w-full p-[8%] box-border shadow-md">
      <figure>
        <img src={imageURL} alt={name} width="100%" />
      </figure>
      <div className="flex justify-between flex-wrap mb-4">
        <div>{name}</div>
        <div>
          Price: {price} {currency}
        </div>
      </div>
      <button
        className="bg-crimson-500 w-full p-[3%] border-0 rounded-md text-white font-semibold text-base shadow-lg hover:bg-crimson-700 active:bg-crimson-500"
        onClick={() => addInYourCart(id, price, quantity, name, imageURL)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
