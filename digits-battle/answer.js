const battleOutcome = (num) => {
  const strNum = num.toString();
  let final = '';
  for (let i = 0; i < strNum.length; i += 2) {
    if (!strNum[i + 1])
      final += strNum[i];
    if (strNum[i] > strNum[i + 1])
      final += strNum[i];
    if (strNum[i] < strNum[i + 1])
      final += strNum[i + 1];
  }
  return +final;
}

const num = 78925;

document.getElementById('ans').textContent = battleOutcome(num);