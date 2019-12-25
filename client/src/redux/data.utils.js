export const updateQuantity = (list, id) => {
  const updatedItem = list.find(item => item.id === id);
  const updatedList = list.map(item =>
    item.id === id
      ? { ...updatedItem, quantity: updatedItem.quantity - 1 }
      : item
  );
  return [...updatedList];
};
