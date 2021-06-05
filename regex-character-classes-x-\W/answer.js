const numDivs = (str) => {
  const patt = /\W[d]/g;
  let count = 0;
  let result = str.match(patt);
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '/d')
      count++;
  }
  return count;
}

const str = "<div></div>";

document.getElementById('ans').textContent = numDivs(str);