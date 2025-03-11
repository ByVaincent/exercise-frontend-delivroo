const convertCentToEuro = (num) => {
  const price = (num / 100).toFixed(2);
  return price + "€";
};

export default convertCentToEuro;
