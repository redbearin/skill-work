function tribonacci(n) {
  let array = [];
  array[0] = 0; 
  array[1] = array[2] = 1;  
  for (let index = 3; index <= n; index++) {
    array[index] = array[index - 1] +
                   array[index - 2] + 
                   array[index - 3]; 
  }
  return array[n];
} 

let n = 4;

tribonacci(n);
