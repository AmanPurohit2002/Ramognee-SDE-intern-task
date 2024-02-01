const addToCart = (productId, quantity) => ({
  type: "ADD_TO_CART",
  payload: { productId, quantity },
});

const removeFromCart = (productId, quantity) => ({
  type: "REMOVE_FROM_CART",
  payload: { productId, quantity },
});

const setProducts = (products) => ({
  type: "SET_PRODUCTS",
  payload: products,
});

export { addToCart, removeFromCart, setProducts };
