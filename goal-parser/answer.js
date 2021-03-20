const interpret = (command) =>{
  let index = 0;
  let word = '';
  while (index < command.length) {
    if(command[index] === '(')
      if (command[index + 1] === ')') {
        word += 'o';
        index += 2;
      }
      else {
        word += 'al';
        index += 4;
      }
    else {
      word += 'G'
      index++;
    }
  }
  return word;
};

command = "G()(al)";
interpret(command);