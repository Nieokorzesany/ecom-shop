export const updateQuantity = (list, id) => {
  const updatedItem = list.find(item => item.id === id);
  const updatedList = list.map(item =>
    item.id === id
      ? { ...updatedItem, quantity: updatedItem.quantity - 1 }
      : item
  );
  return [...updatedList];
};

export const sortBy = (param, list) => {
  if (param === "A-Z") {
    const sortedList = list.sort(function(a, b) {
      if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
      if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
      return 0;
    });
    return sortedList;
  }
  if (param === "Z-A") {
    const sortedList = list.sort(function(a, b) {
      if (a.name.toUpperCase() < b.name.toUpperCase()) return 1;
      if (a.name.toUpperCase() > b.name.toUpperCase()) return -1;
      return 0;
    });
    return sortedList;
  }
  if (param === "PriceUp") {
    const sortedList = list.sort(function(a, b) {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    });
    return sortedList;
  }
  if (param === "PriceDown") {
    const sortedList = list.sort(function(a, b) {
      if (a.price < b.price) return 1;
      if (a.price > b.price) return -1;
      return 0;
    });
    return sortedList;
  } else return list;
};
