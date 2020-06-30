const minStack = (operations, values) => {
  const output = [];
  let stack;
  for (let index = 0; index < operations.length; index++) {
    if (operations[index] === "MinStack") {
      stack = values[index];
      output.push(null);
    }
    if (operations[index] === "push") {
      stack.push(values[index][0]);  
      output.push(null);
    }
    if (operations[index] === "getMin") {
      output.push(Math.min(...stack));
    }
    if (operations[index] === "top") {
      output.push(stack[stack.length - 1]);
    }
    if (operations[index] === "pop") {
      stack.pop();
      output.push(null);
    }
  }
  console.log(output);
}

const operations = ["MinStack","push","push","push","getMin","pop","top","getMin"];

const values = [[],[-2],[0],[-3],[],[],[],[]];

minStack(operations, values);