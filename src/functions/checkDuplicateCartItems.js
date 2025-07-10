export const checkDuplicateCartItems = (array, object) => {
  let found = false;

  const updatedArray = array.map((item) => {
    if (item.id === object.id) {
      found = true;
      return { ...item, quantity: item.quantity + object.quantity };
    }
    return item;
  });

  if (!found) {
    updatedArray.push(object);
  }

  return updatedArray;
};
