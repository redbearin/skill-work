function canWinNim(n) {
  return n % 4 === 0 ? false : true;
}

n = 8;
canWinNim(n);