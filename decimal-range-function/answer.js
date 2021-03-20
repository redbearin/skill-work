const drange = (stop, start = 0, step = 1) => {
  // convert step to string
  const strStep = step.toString();
  // number digits after decimal
  let count = 0;
  // count number of digits after decimal
  if (strStep.includes('.')) {
    for (let i = strStep.length - 1; i >= 0; i--) {
      if (strStep[i] !== '.') 
        count++;
      else 
        break;
    }
  }
  // add starting number to final array
  const final = [start.toFixed(count)];
  // set the current value
  let current = start;
  // loop until you have reach stop
  while (current < stop) {
    // add step to current number
    current += step;
    // current number is greater than stop
    if (current > stop)
      break;
    // current number less than stop
    // add it to the array
    else  
      final.push(current.toFixed(count));
  }
  console.log(final);
}

document.getElementById('ans').innerHTML = drange(7, 1, 1.2);