class FizzBuzz {
  fizz() {
    console.log('fizz');
  }    
  buzz() {
    console.log('buzz');
  }      
  fizzbuzz() {
    console.log('fizzbuzz');
  } 
  number(currentNum) {
    console.log(currentNum);
  }
}

const n = 15;

fizzBuzz1 = new FizzBuzz();
for (let num = 1; num <= n; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    fizzBuzz1.fizzbuzz();
  }
  else if (num % 3 === 0) {
    fizzBuzz1.fizz();
  }
  else if (num % 5 === 0) {
    fizzBuzz1.buzz();
  }
  else {
    fizzBuzz1.number(num);
  }
}