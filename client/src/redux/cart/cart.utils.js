export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, listQuantity: cartItem.listQuantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, listQuantity: 1 }];
};
