const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const obj = prices.map((p) => ({ price: p, salePrice: p / 2 }));
console.log('Price objects: ', obj);
// you can create objects directly inside by using the {}

const formatted = prices.map((p) => `$${p.toFixed(2)}`);
console.log('Formatted prices: ', formatted);
// to.Fixed() method sets the decimal point based on the digit inside the parantheses
