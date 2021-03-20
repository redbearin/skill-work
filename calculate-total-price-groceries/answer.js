const getTotalPrice = (items) => {
  let total = 0;
  for (let index = 0; index < items.length; index++) {
    total += items[index].price;
  }
  return '$' + total.toFixed(2);
};

items = [
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]
getTotalPrice(items);