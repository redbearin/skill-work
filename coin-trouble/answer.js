const coinsDiv = (coins) => {

  let total = coins.reduce((accumulator, value) => accumulator + value);
  let amtPerKid = total/3;
  console.log(amtPerKid)
  if (!Number.isInteger(amtPerKid))
    return false;
  
  const countObj = {}
  for (let i = 0; i < coins.length; i++) {
    if (countObj[coins[i]])
      countObj[coins[i]] += 1;
    else
      countObj[coins[i]] = 1;
  }
  console.log(countObj);

  let i, j, temp;
  let result = [];
  let combinations = Math.pow(2, coins.length)
  
  // Time & Space Complexity O (n * 2^n)
  
  for (i = 0; i < combinations;  i++) {
    temp = ''
    
    for (j = 0; j < coins.length; j++) {
      // & is bitwise AND
      if (i & Math.pow(2, j)) {
        temp += coins[j]
      }
    }
    if (temp !== '') {
      let tempArr = temp.split('');
      let sum = 0
      for (let m = 0; m < tempArr.length; m++) {
        sum += +tempArr[m];
      }
      if (sum === amtPerKid)
        result.push(temp.split('').sort());
    }
  }

  console.log(result)
  return result
  };


const coins = [1, 2, 3, 2, 2, 2, 3];

document.getElementById('ans').textContent = coinsDiv(coins);