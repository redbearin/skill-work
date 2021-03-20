function removeDuplicates(string) {
  const stack = [];
  for(let index = 0; index < string.length; index++) {
    if(stack.length && stack[stack.length - 1] === string[index]) {
      stack.pop(); 
    } else {
      stack.push(string[index]);
    }
  }
  return stack.join('');
};

var string = "abbaca";

removeDuplicates(string);