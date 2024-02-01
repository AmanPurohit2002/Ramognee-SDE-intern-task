const selectCartItemCount = (state) =>
  Object.values(state.cart).reduce((total, count) => total + count, 0);

export { selectCartItemCount };
