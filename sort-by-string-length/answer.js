const  sortByLength = (arr) => {
  return arr.sort((a,b) => a.length - b.length);
}

const arr = ["may", "april", "september", "august"];

sortByLength(arr);