const average = (salaries) => {
  // sort the salaries smallest to biggest
  salaries.sort((a, b) => a - b);
  // remove the smallest and biggest salaries
  salaries.pop();
  salaries.shift();
  // sum the remaining salaries and
  // divide by the number of salaries
  // set the number of digits after the decimal
  return (salaries.reduce((accumulator, currentValue) => accumulator += currentValue)/salaries.length).toFixed(4);
}

const salaries = [8000,9000,2000,3000,6000,1000];
average(salaries);