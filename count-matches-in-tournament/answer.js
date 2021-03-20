const numberOfMatches = (teams) => {
  let matches = 0;
  while(teams > 1) {
    matches += Math.floor(teams/2);
    teams = Math.ceil(teams/2);
  }
  return matches;
};

const teams = 14;
numberOfMatches(teams);

