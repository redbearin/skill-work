function bulbSwitch(n) {
  let bulbs = [];
  for (let round = 1; round <= n; round++) {
    //condition first round
    if (round === 1) {
      for (let index = 0; index < n; index++) {
        bulbs.push('on');
      }
    }

    //condition 2nd round
    if (round === 2) {
      for (let index = 1; index < n; index += 2) {
        bulbs[index] = 'off';
      }
    }

    //condition 3rd round
    if (round === 3) {
      for (let index = 2; index < n; index += 3) {
        bulbs[index] === 'on' ? bulbs[index] = 'off': bulbs[index] = 'on';
      }
    }

    //condition round > 3 and < last
    if(round > 3 && round != n) {
      for(let index = round -1; index < n; index += round) {
        bulbs[index] === 'on' ? bulbs[index] = 'off': bulbs[index] = 'on';
      }
    }

    //condition last round
    if(round > 3 && round === n) {
      bulbs[n-1] === 'off' ? bulbs[n-1] = 'on' : bulbs[n-1] = 'off';
    }
  }
  
  return bulbs.reduce((accumulator, bulb) => {
    if (bulb === 'on') {
      accumulator += 1;
    }
    return accumulator;
  }, 0);
}

var n = 5;

bulbSwitch(n); 