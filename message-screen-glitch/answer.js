const messageGlitch = (str) => {
  let index = 0;
  let final = '';
  const ltr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z'};

  while (index < str.length) {
    if (str[index] === ' ' || !Number.isInteger(+str[index])) {
      final += str[index];
      index++;
    }
    else {
      if (str[index + 1] === ' ' || !Number.isInteger(+str[index + 1])) {
        final += ltr[+str[index]];
        index++;
      }
      else {
        final += ltr[+(str[index] + str[index + 1])];
        index+= 2;
      }
    }
  }
  return final;
};

const str = "A s9l22e18 Pr9u19 9s d15u2l5-16a18k5d o21t19i4e. Wi12l t8e o23n5r p12e1s5 13o22e i20."

messageGlitch(str);