export const generateUniqueId = () => {
  return Math.floor(1 + (Math.random() * 10000 + 1));
};

export const getDiscount = (rate, price) => {
  const discount = Math.round((price / 100) * rate);
  const currentPrice = price - discount;
  return currentPrice;
};
