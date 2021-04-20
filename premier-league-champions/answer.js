const champions = (arr) => {
  let maxPoints = 0;
  let maxDiff = 0;
  // teams with maximum points
  let ptsWinners = [];
  // winner of teams with maximum points
  let tieWinner;
  // add points and differential to each team
  for (let i = 0; i < arr.length; i++) {
    arr[i].points = 3 * arr[i].wins + arr[i].draws;
    arr[i].diff = arr[i].scored + arr[i].conceded;
  }
  // find teams with top points
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].points < maxPoints)
      continue;
    if (arr[i].points > maxPoints) {
      // clear ptsWinners array
      ptsWinners = [];
      // add new leader
      maxPoints = arr[i].points;
    }
    // add name and differential to ptsWinners array
    ptsWinners.push([arr[i].name, arr[i].diff]);
  }
  // if more than one team with top points
  // determine winner based on differential
  if (ptsWinners.length > 1) {
    for (let i = 0; i < ptsWinners.length; i++) {
      if (ptsWinners[i][1] > maxDiff) {
        maxDiff = ptsWinners[i][1];
        tieWinner = ptsWinners[i][0];
      }
    }
    return tieWinner;
  }
  // a team won based on points alone
  else
    return ptsWinners[0][0]; 
}

const arr = 
[
  {
    name: "Manchester City",
    wins: 30,
    loss: 8,
    draws: 0,
    scored: 67,
    conceded: 20,
  },
  {
    name: "Liverpool",
    wins: 34,
    loss: 2,
    draws: 2,
    scored: 118,
    conceded: 29,
  },
  {
    name: "Leicester City",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
];

document.getElementById('ans').innerHTML = champions(arr);