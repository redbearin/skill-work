const ascDesNone = (arr, sortType) => {
  if (sortType === 'Asc') 
    return arr.sort((a,b) => a - b);
  if (sortType === 'Des') 
    return arr.sort((a,b) => b - a);
  else
    return arr;
}

const arr = [1, 2, 3, 4];
const sortType = "None";
document.getElementById('ans').innerHTML = ascDesNone(arr, sortType);