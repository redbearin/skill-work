const combinations = (...arguments) => {
  let args = [...arguments]; 
  return args.reduce((accumulator, element) => 
         accumulator *= element);
};

combinations(3, 7, 4);