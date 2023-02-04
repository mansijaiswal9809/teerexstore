import React from "react";
import { useDispatch } from "react-redux";
import { dec, deleteProduct, inc } from "../features/CartSlice";
import { BsFillTrashFill } from 'react-icons/bs';

const CartItems = ({ item }) => {
  // console.log(item);
  const { name, id, count, price, total, quantity, imageURL } = item;
  
  const dispatch = useDispatch();
  return (
    <div className="flex  gap-3 px-8 justify-between items-center font-semibold flex-wrap mymd:px-20 py-10 text-lg  shadow-md">
      <div>
        <img src={imageURL} alt={name} width="200px" />
        <div className="flex justify-between">
        <div>{name}</div>
        <div>Rs {price}</div>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={() => dispatch(dec({ id }))}>-</button>
        <div>{count}</div>
        <button onClick={() => dispatch(inc({ id }))}>+</button>
      </div>
      <div> Subtotal: Rs {total} </div>
      <button className="flex gap-2 items-center bg-crimson-500  p-4 border-0 rounded-md text-white font-semibold text-base shadow-lg hover:bg-crimson-700 active:bg-crimson-500" onClick={() => dispatch(deleteProduct({ id }))}>
      <BsFillTrashFill/> Remove Product
      </button>
    </div>
  );
};

export default CartItems;
