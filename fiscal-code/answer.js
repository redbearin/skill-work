const fiscalCode = (person) => {
  // first three letters
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let sur = '';
  for (let index = 0; index < person.surname.length; index++) {
      if (!vowels.includes(person.surname[index].toLowerCase()))
        sur += person.surname[index].toUpperCase();
    }

  while (sur.length < 3) {
    for (let index = 0; index < person.surname.length; index++) {
      if (vowels.includes(person.surname[index].toLowerCase()))
      sur += person.surname[index].toUpperCase();
    }
    if (person.surname.length < 3) {
      sur += 'X';
    }
  }
  // second three letters
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
  return sur + nam;
}

const person = {
  name: "Mo",
  surname: "Yu",
  gender: "M",
  dob: "1/1/1900"
};

document.getElementById('ans').innerHTML = fiscalCode(person);

