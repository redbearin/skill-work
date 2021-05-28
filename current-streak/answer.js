const currentStreak = (day, history) => {
  // there is no history
  if (!history.length)
    return 0;
  // current day
  let baseDate = new Date (day);
  // last date when activity was done
  const lastHistoric = new Date (history[history.length - 1].date);
  // nothing happened on the day, so no streak
  if (baseDate.getTime() !== lastHistoric.getTime())
    return 0;

  // check length of streak
  // intialize historic date
  let historicDate;
  // initialize at a count of 1
  let count = 1;
  // go through date by date to see how many
  // days before a gap
  for (let i = history.length - 2; i >= 0; i--) {
    let historicDate = new Date (history[i].date);
    if ((baseDate.getTime() - historicDate.getTime())/(1000 * 60 * 60 * 24) === 1) {
      count++;
      baseDate = historicDate;
    }
    else
      return count;
  }
}

const day = "2019-09-25"; 

const history = [];

document.getElementById('ans').textContent = currentStreak(day, history);