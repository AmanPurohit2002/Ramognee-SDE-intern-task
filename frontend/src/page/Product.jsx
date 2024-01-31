import React, { useState, useEffect } from "react";
import Header from '../component/Header';
import { RiShoppingCart2Line , RiStarLine} from "react-icons/ri";

const ProductViewPage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (productId, quantity) => {
    // Update the cart state with the new product and quantity
    if(quantity <0) return;
    
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + quantity,
    }));
  };

  const cartItemCount = Object.values(cart).reduce((total, count) => total + count, 0);

  const renderProductCard = (product) => (
    <div key={product.id} className="product-card shadow-lg p-4 bg-white rounded-md text-center">
      <img src={product.image} alt={product.title} className="w-[10vw] h-[35vh] object-cover mb-4" />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
      <p className="text-gray-700 mb-4">{product.description.substring(0,50)}</p>
      <div className="flex justify-between items-center">
        <button
          onClick={() => addToCart(product.id, 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add to Cart
        </button>
        <div className="flex items-center space-x-2">
          <RiShoppingCart2Line size={20} />
          <span>{cart[product.id] || 0}</span>
        </div>
      </div>
    </div>
  );

  const renderCompactProductCard = (product) => (
    <div key={product.id} className="cart-product-card flex items-center space-x-4 mb-4">
      <img src={product.image} alt={product.title} className="w-16 h-24 object-cover" />
      <div>
        <h3 className="text-md font-semibold mb-1">{product.title}</h3>
        <p className="text-gray-700 text-sm mb-1">{product.description.substring(0, 50)}...</p>
        <p className="text-gray-600 mb-1">${product.price.toFixed(2)}</p>
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
          onClick={() => addToCart(product.id, -1)}
          className="text-red-500 hover:text-red-600"
        >
          -
        </button>
        <span>{cart[product.id] || 0}</span>
        <button
          onClick={() => addToCart(product.id, 1)}
          className="text-blue-500 hover:text-blue-600"
        >
          +
        </button>
      </div>
    </div>
  );
  

  return (
    <div className="product-view-page container mx-auto py-8">
      {/* Use Header component */}
      <Header cartItemCount={cartItemCount} />

      {/* Product Cards */}
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => renderProductCard(product))}
      </div>

      {/* Compact Product Cards in the Cart */}
      <div className="mt-8">
        {Object.entries(cart).map(([productId, quantity]) => {
          const product = products.find((p) => p.id.toString() === productId);
          return product && quantity > 0 && renderCompactProductCard(product);
        })}
      </div>
    </div>
  );
};

export default ProductViewPage;
