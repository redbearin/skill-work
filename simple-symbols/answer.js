const simpleSymbols = (str) => {
  let element;
  if (str.charCodeAt(0) > 96 && str.charCodeAt(0))
    return false;
  for (let i = 1; i < str.length - 1; i++) {
    if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123 && (str[i - 1] !== '+' || str[i + 1] !== '+')){
      return false;
    }
  }
  return true;
}

const str = "==+p+++++++++====8+z++++";

document.getElementById('ans').innerHTML = simpleSymbols(str);