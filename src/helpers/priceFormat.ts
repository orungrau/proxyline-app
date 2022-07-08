export const priceFormat = (price: number): string => {
  return (price / 100).toFixed(2).toString();
};
