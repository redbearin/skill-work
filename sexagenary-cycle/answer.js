const sexagenary = (year) => {
  let stemBranch = '';
  const branches = {1984: 'Rat', 1985: 'Ox', 1986: 'Tiger', 1987: 'Rabbit', 1988: 'Dragon', 1989: 'Snake', 1990: 'Horse', 1991: 'Sheep', 1992: 'Monkey', 1993: 'Rooster', 1994: 'Dog', 1995: 'Pig', 1996: 'Rat', 1997: 'Ox'}
  const stems = {1984: 'Wood', 1985: 'Wood', 1986: 'Fire', 1987: 'Fire', 1988: 'Earth', 1989: 'Earth', 1990: 'stems', 1991: 'stems', 1992: 'Water', 1993: 'Water'}
  // go through each key in stems
  // if multiple of 10 it is a match
  for (let key in stems) {
    if (Math.abs(year - key) % 10 === 0)
    stemBranch += stems[key] + ' ';
  }
    // go through each key in branches
  // if multiple of 12 it is a match
  for (let key in branches) {
    if (Math.abs(year - key) % 12 === 0)
      stemBranch += branches[key];
  }
  return stemBranch;
}
const year = 1962;

document.getElementById('ans').textContent = sexagenary(year);

