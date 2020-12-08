const collect = (str, num) => {
  const groups = [];
  for (let index = 0; index < str.length; index += num) {
    let shortStr = '';
    let flag = 0;
    for (let index1 = index; index1 < index + num; index1++) {
      if (index + num > str.length){
        flag++;
        break;
      }
      shortStr += str[index1];
    }
    if (!flag)
      groups.push(shortStr);
  }
  return groups;
}

const str = "pneumonoultramicroscopicsilicovolcanoconiosis";
const num = 15;
collect(str, num);
