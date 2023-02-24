export const generateUniqueId = () => {
  return Math.floor(1 + (Math.random() * 10000 + 1));
};
