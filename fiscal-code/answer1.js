const fiscalCode = (person) => {
  // 1st THREE LETTERS
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let sur = '';
  for (let index = 0; index < person.surname.length; index++) {
      if (!vowels.includes(person.surname[index].toLowerCase()))
        sur += person.surname[index].toUpperCase();
  }
  // don't have enough consonants or surname less than 3 letters
  let index = 0;
  while (sur.length < 3) {
    if (vowels.includes(person.surname[index].toLowerCase()))
      sur += person.surname[index].toUpperCase();
    if (person.surname.length < 3) 
      sur += 'X';
    index++;
  }
  // 2nd THREE LETTERS
  let consCount = 0;
  let nam = '';
  for (let index = 0; index < person.name.length; index++) {
    if (consCount > 3)
      break;
    if (!vowels.includes(person.name[index].toLowerCase()))
      consCount++;
  }

  let count = 0;
  const acceptable = [1,2,4];
  for (let index = 0; index < person.name.length; index++) {
    if (!vowels.includes(person.name[index].toLowerCase()) && consCount > 3) {
      count++;
      if (count > 4) 
        break;
      if (acceptable.includes(count)) {
        nam += person.name[index].toUpperCase();
      }
    }
    if (!vowels.includes(person.name[index].toLowerCase()) && consCount <= 3) {
      nam += person.name[index].toUpperCase();
    }
  }
  while (nam.length < 3) {
    for (let index = 0; index < person.name.length; index++) {
      if (vowels.includes(person.name[index].toLowerCase()))
      nam += person.name[index].toUpperCase();
    }
    if (person.name.length < 3) {
      nam += 'X';
    }
  }

  // year, month, day in special format
  const dobArr = person.dob.split('/');
  const months = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'H', 7: 'L', 8: 'M', 9: 'P', 10: 'R', 11: 'S', 12: 'T'};

  // year
  const yr = dobArr[2][2] + dobArr[2][3];
  // month
  const mon = months[dobArr[1]];

  // day
  let day;
  // male
  if (person.gender === 'M') {
    if (+dobArr[0] < 10)
      day = '0' + dobArr[0];
    else
      day = dobArr[0]
  }
  // female
  else {      
    day = +dobArr[0] + 40;
  }

  return sur + nam + yr + mon + day ;
}

const person = {
  name: "Mickey",
  surname: "Mouse",
  gender: "M",
  dob: "16/1/1928"
};

document.getElementById('ans').innerHTML = fiscalCode(person);
