import { useId } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

export default function Navbar({ onSearchChange }) {
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser();

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="grid grid-cols-3 justify-between px-24 py-4 bg-[#859F3D] items-center"
    >
      <ul>
        <li className="flex items-center justify-center">
          <Link
            to="/"
            className="text-[#F2F4FF] hover:text-[#1A1A19] active:text-[#F6FCDF]"
          >
            Home
          </Link>
        </li>
      </ul>
      <ul className="flex justify-center items-center">
        <li className="w-full">
          <input
            type="text"
            className="text-black active:text-black focus:text-black px-4 py-2 w-full"
            id={inputId}
            aria-label="Search products"
            placeholder="Search product..."
            onChange={handleSearchInput}
          />
        </li>
      </ul>
      {!isLoggedIn ? (
        <ul className="flex gap-2 justify-end">
          <li>
            <button
              onClick={login}
              className="text-[#F2F4FF] hover:text-[#1A1A19] active:text-[#F6FCDF]"
            >
              Sign in
            </button>
          </li>
          <li>
            <Link
              to="/signup"
              className="text-[#F2F4FF] hover:text-[#1A1A19] active:text-[#F6FCDF]"
            >
              Sign up
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex justify-end gap-2">
          <li>
            <Link
              to="/cart"
              className="text-[#F2F4FF] hover:text-[#1A1A19] active:text-[#F6FCDF]"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="text-[#F2F4FF] hover:text-[#1A1A19] active:text-[#F6FCDF]"
            >
              My Orders
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              className="text-[#F2F4FF] hover:text-[#1A1A19] active:text-[#F6FCDF]"
            >
              Sign out
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
