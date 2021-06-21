const lexicalOrder = (n) => {
  const array = [];
  for (let num = 1; num <= n; num++) 
    array.push(num);
  return array.sort();
}
const n = 13;
lexicalOrder(n);