import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { loginWithRedirect, user, logout, isAuthenticated } = useAuth0();
  const { totalCount } = useSelector((store) => store.cart);
  console.log(user,isAuthenticated)
  return (
    <div className="max-w-[100vw] w-[100vw] p-[15px] sm:py-[20px] sm:px-[40px] sticky top-0 z-50 bg-crimson-500 flex justify-between text-white text-lg font-semibold items-center ">
      <Link to="/">TeeRex Store</Link>
      <div className="navbar-links flex gap-3 mysm:gap-6 items-center">
        {user ? (
          <div className="flex gap-3 items-center">
            <div className="rounded-full overflow-hidden w-max h-max">
              <img src={user.picture} width="40px" alt="user" />
            </div>{" "}
            <button
              onClick={() => {
                logout({ returnTo: window.location.origin });
              }}>Logout</button>
          </div>
        ) : (
          <button onClick={()=>{loginWithRedirect()}}>Login</button>
        )}
        {/* <div className="bg-white w-[50px] h-[50px] rounded-full"></div> */}
        <Link to="/cart">
          <div className="relative">
            <FaShoppingCart size="25px" />
            <span className="absolute top-[-12px] right-[-10px] w-6 h-6 rounded-full bg-red-800 text-center">
              {totalCount}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
