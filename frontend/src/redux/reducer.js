import { selectCartItemCount } from "./selector";

const initialState = {
  products: [],
  cart: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.productId]:
            (state.cart[action.payload.productId] || 0) +
            action.payload.quantity,
        },
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.productId]: Math.max(
            0,
            (state.cart[action.payload.productId] || 0) -
              action.payload.quantity
          ),
        },
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const getCartItemCount = (state) => selectCartItemCount(state);

export default rootReducer;
