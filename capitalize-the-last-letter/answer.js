const capLast = (str) => {
  const strArr = str.split(' ');

  for (let i = 0; i < strArr.length; i++) {
    const firstPart = strArr[i];
    const lastLtr = strArr[i][strArr[i].length - 1];
    strArr[i] = firstPart.slice(0, -1) + lastLtr.toUpperCase();
  }
  return strArr.join(' ');
}

const str = "HELp THe LASt LETTERs CAPITALISe";

document.getElementById('ans').textContent = capLast(str);