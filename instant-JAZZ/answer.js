const jazzify = (arr) => {
  const final = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i][arr[i].length - 1] === '7')
      final.push(arr[i]);
    else
      final.push(arr[i] + 7);
  }
  return final;
}

const arr = [];

document.getElementById('ans').innerHTML = jazzify(arr);