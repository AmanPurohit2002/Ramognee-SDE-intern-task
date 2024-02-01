import React from "react";
import { Link } from "react-router-dom";
import {
  RiAncientPavilionFill,
  RiSearchLine,
  RiShoppingCartLine,
  RiUserLine,
} from "react-icons/ri";

import { FaHome } from "react-icons/fa";

import { GiClothes } from "react-icons/gi";
import { getCartItemCount } from "../redux/reducer";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItemCount = useSelector(getCartItemCount);

  return (
    <div className="fixed top-0 left-0 right-0 z-10 p-4 bg-gray-800 text-white">
      <div className="flex items-center justify-between">
        {/* Left Section - Top Left Corner */}
        <div className="flex items-center space-x-8">
          <Link to="/product">
            <span className="text-lg font-bold">SHOPLANE</span>
          </Link>
        </div>

        {/* Center Section - Centered */}
        <div className="flex items-center space-x-8">
          <Link to="/product" className="flex items-center">
            <FaHome size={20}/>
            <span className="ml-1">Home</span>
          </Link>
          <Link to="/product" className="flex items-center">
            <GiClothes size={20} />
            <span className="ml-1">Clothing</span>
          </Link>
          <Link to="/product" className="flex items-center">
            <RiAncientPavilionFill size={20} />
            <span className="ml-1">Accessories</span>
          </Link>
        </div>

        {/* Right Section - Top Right Corner */}
        <div className="flex items-center space-x-8">
          <Link to="/product">
            <RiSearchLine size={20} />
          </Link>
          <Link to="/cart" className="relative">
            <RiShoppingCartLine size={20} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs">
              {cartItemCount}
            </span>
          </Link>
          <Link to="/product">
            <RiUserLine size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
