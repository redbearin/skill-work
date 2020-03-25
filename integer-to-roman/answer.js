function intToRoman(num) {
  if(num >= 1000) {
    roman += 'M';
    num -= 1000;
    intToRoman(num);
  }
  else if(num >= 500 && num < 1000) {
    if(num >= 900) {
      roman += 'CM';
      num -= 900;
      intToRoman(num);
    }
    else {
      roman += 'D';
      num -= 500;
      intToRoman(num);
    }
  }   
  else if(num >= 100 && num < 500) {
    if(num >= 400) {
      roman += 'CD';
      num -= 400;
      intToRoman(num);
    } 
    else {
      roman += 'C';
      num -= 100;
      intToRoman(num);
    }
  }  
  else if(num >= 50 && num < 100) {
    if(num >= 90) {
      roman += 'XC';
      num -= 90;
      intToRoman(num);
    } 
    else {
      roman += 'L';
      num -= 50;
      intToRoman(num);
    }
  } 
  else if(num >= 10 && num < 50) {
    if(num >= 40) {
      roman += 'XL';
      num -= 40;
      intToRoman(num);
    } else {
      roman += 'X';
      num -= 10;
      intToRoman(num);
    }
  } 
  else if(num >= 5 && num < 10) {
    if(num === 9) {
      roman += 'IX';
      num -= 9;
      intToRoman(num);
    } else {
      roman += 'V';
      num -= 5;
      intToRoman(num);
    }
  }
  else if(num >= 1 && num < 5) {
    if(num === 4) {
      roman += 'IV';
      num -= 4;
      intToRoman(num);
    } 
    else {
      roman += 'I';
      num -= 1;
      intToRoman(num);
    }
  }
  return roman;
}

var num = 1994;
var roman = '';
intToRoman(num);