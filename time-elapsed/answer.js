const elapsed = (time1, time2) => {
  const ttlSec = time2 - time1; 

  // break time into components
  const days = ttlSec / 60 / 60 / 24;
  const hours = (days - Math.floor(days)) * 24;
  const mins = (hours - Math.floor(hours)) * 60;
  const secs = (mins - Math.floor(mins)) * 60;

  // combine all components into string
  const strTime = Math.floor(days) + ' days ' + 
                  Math.floor(hours) + ' hours ' + 
                  Math.floor(mins) + ' minutes ' +
                  Math.round(secs) + ' seconds';

  // break string time into array components
  const arrTime = strTime.split(' ');

  // go through the array from the end
  for (let i = arrTime.length - 1; i >= 0; i--) {
    // 0 remove that time component and label
    if (arrTime[i] === "0") {
      arrTime.splice(i, 2);
    }
    // address rounding errors hours to days
    if (i === 2 && arrTime[i] === "24") {
      arrTime[0] = (+arrTime[0] + 1).toString();
      arrTime.splice(i, 2);
    }
    // addreses rounding errors min to days
    // address rounding errors sec to min
    if ((i === 4 || i === 6) && arrTime[i] === "60") {
      arrTime[i-2] = (+arrTime[i-2] + 1).toString();
      arrTime.splice(i, 2);
    }

    // 1 make it a singular label
    if (arrTime[i] === "1") {
      if (arrTime[i + 1] === 'days')
        arrTime[i + 1] = 'day';
      else if (arrTime[i + 1] === 'hours')
        arrTime[i + 1] = 'hour';
      else if (arrTime[i + 1] === 'minutes')
        arrTime[i + 1] = 'minute';
      else if (arrTime[i + 1] === 'seconds')
        arrTime[i + 1] = 'second';        
    }
  }
  return arrTime.join(' ');
}

const time1 = 1559681004;
const time2 = 1559899926;

document.getElementById('ans').innerHTML = elapsed(time1, time2);