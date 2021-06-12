const pizzaPoints = (customersObj, minOrders, minPrice) => {
  let orderCt;
  const elgibleCust = [];
  // cycle customer by customer thru object
  for (key in customersObj) {
    orderCt = 0;
    // cycle through each purchase for that customer
    for (let idx = 0; idx < customersObj[key].length; idx++) {
      // purchase >= minimum purchase price
      if (customersObj[key][idx] >= minPrice)
        // increment the count
        orderCt++;
    }
    // number of orders meeting price
    // >= to minimum set by Google
    if (orderCt >= minOrders) {
      elgibleCust.push(key);
    }
  }
  // customers eligible for free pizza
  // in alpha order
  return elgibleCust.sort();
}

const customersObj = {
  "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
  "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
}

const minOrders = 5;
const minPrice = 100;


document.getElementById('ans').textContent = pizzaPoints(customersObj, minOrders, minPrice);