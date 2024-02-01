import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/action";
import { RiShoppingCart2Line, RiStarLine } from "react-icons/ri";
import Header from "../component/Header";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  const renderCompactProductCard = (product) => (
    <div
      key={product.id}
      className="cart-product-card flex items-center space-x-4 mb-4 p-4 bg-white rounded-md shadow-md"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-16 h-24 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="text-md font-semibold mb-1">{product.title}</h3>
        <p className="text-gray-700 text-sm mb-1">
          {product.description}
        </p>
        <p className="text-gray-600 mb-1">₹{product.price.toFixed(2)}</p>
        <div className="flex items-center space-x-2">
          <RiShoppingCart2Line size={20} />
          <span>{cart[product.id] || 0}</span>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-gray-700">{product.rating.rate}</span>
          <RiStarLine size={16} className="text-yellow-500" />
          
        </div>
      </div>
      <div className="flex items-center space-x-2 ml-auto">
        <button
          onClick={() => dispatch(removeFromCart(product.id, 1))}
          className="text-red-500 hover:text-red-600"
        >
          -
        </button>
        <span>{cart[product.id] || 0}</span>
        <button
          onClick={() => dispatch(addToCart(product.id, 1))}
          className="text-blue-500 hover:text-blue-600"
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <div className="cart-page container mx-auto py-8">
      <Header />

      <div className="mt-8">
        {Object.entries(cart).map(([productId, quantity]) => {
          const product = products.find((p) => p.id.toString() === productId);
          return product && quantity > 0 && renderCompactProductCard(product);
        })}
      </div>
    </div>
  );
};

export default Cart;
