const averageWaitingTime = (customers) => {
  let startTime = customers[0][0];
  let waitTime = 0;
  // each customer
  for(let i = 0; i < customers.length; i++) {
    // last customer left before this customer arrived
    if (startTime - customers[i][0] < 0)
      startTime = customers[i][0];
    // cumulative wait time + difference between start time
    // and time customer arrives
    waitTime += customers[i][1] + startTime - customers[i][0]; 
    // reset start time
    startTime = customers[i][1] + startTime;
  }
   return waitTime/customers.length;
};

customers = [[5,2],[5,4],[10,3],[20,1]];

document.getElementById('ans').innerHTML = averageWaitingTime(customers);