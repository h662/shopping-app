import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/slices/userSlice";

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="p-4 bg-pink-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">ShopEasy</h1>
      <nav className="flex items-center gap-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/products" className="hover:underline">
          Products
        </Link>
        <Link to="/cart" className="hover:underline">
          Cart
        </Link>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="hover:underline bg-red-500 px-4 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
