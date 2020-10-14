const sortByLength = (str) => {
  const strArr = str.split(' ');
  strArr.sort((a,b)  => a.length - b.length);
  return strArr.join(' ');
}

const str = "Hello my friend";
sortByLength(str);
