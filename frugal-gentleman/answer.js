const chosenWine = (choices) => {
  choices.sort((a,b) => a.price - b.price);
  if (choices.length > 1)
    return choices[1];
  else if (choices.length)
    return choices[0];
  else 
    return [];
};

const choices = [
  { name: "Wine A", price: 8.99 }
];

chosenWine(choices);
