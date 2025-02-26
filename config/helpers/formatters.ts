export const currencyFormatUSD = (number: number) => {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
