import React from "react";
import { Link } from "react-router-dom";
import {
  RiAncientPavilionFill,
  RiSearchLine,
  RiShoppingCartLine,
  RiUserLine,
} from "react-icons/ri";

import { GiClothes } from "react-icons/gi";

const Header = ({ cartItemCount }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 p-4 bg-gray-800 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/">
            <span className="text-lg font-bold">SHOPLANE</span>
          </Link>
          <Link to="/clothing" className="flex items-center space-x-2">
            <GiClothes size={20} />
            <span>Clothing</span>
          </Link>
          <Link to="/accessories" className="flex items-center space-x-2">
            <RiAncientPavilionFill size={20} />
            <span>Accessories</span>
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <Link to="/search">
            <RiSearchLine size={20} />
          </Link>
          <Link to="/cart" className="relative">
            <RiShoppingCartLine size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs">
              {cartItemCount}
            </span>
          </Link>
          <Link to="/profile">
            <RiUserLine size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
