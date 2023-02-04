import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {CartItems} from "../components";
import { clearCart, getAll } from "../features/CartSlice";

const Cart = () => {
  const { cart, totalAmount } = useSelector((store) => store.cart);
  // console.log(totalAmount,totalCount)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAll());
  }, []);
  // console.log(cart);
  return (
    <div>
      <h1 className="text-4xl p-10">Cart Page</h1>
      {cart.length === 0 ? (
        <div>
          {" "}
          <div>Your Cart is Empty</div>
          <Link className="text-black" to="/">
            Get some Products from product Page
          </Link>
        </div>
      ) : null}
      <div>
        {cart.map((item) => (
          <CartItems item={item} />
        ))}
      </div>
      {cart.length > 0 ? (
        <div className="px-8 mymd:px-20 py-10 w-[100vw] bg-crimson-500 text-white font-semibold">
          <div>TotalAmount: <span className="font-bold text-lg" >Rs {totalAmount}</span> </div>
          <div>Shipping Charges: <span className="font-bold text-lg" >Rs 99</span></div>
          <div>Amount to pay: <span className="font-bold text-lg" >Rs {totalAmount + 99}</span></div>
        </div>
      ) : null}
      {cart.length > 0 ? (
        <div className="mt-10">
          <button className=" bg-crimson-500 p-2 mymd:p-4 border-0 rounded-md text-white font-semibold text-base shadow-lg hover:bg-crimson-700 active:bg-crimson-50 float-right mr-10 ">
            Buy Now
          </button>
          <button
            className=" bg-crimson-500  p-2 mymd:p-4 border-0 rounded-md text-white font-semibold text-base shadow-lg hover:bg-crimson-700 active:bg-crimson-50 float-right mr-10 "
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;

// D5OGugInKY478bxYKo7oxmydLr2szrRB
// shopsio.us.auth0.com