const maximumTime = (time) => {
  if (time[0] === '?')
    time = '2' + time.slice(1);
  if (time[1] === '?') {
    if (time[0] === '2')
      time = time[0] + '3' + time.slice(2);
    else 
      time = time[0] + '9' + time.slice(2);
  }
  if (time[3] === '?')
      time = time.slice(0, 3) + '5' + time[4];
  if (time[4] === '?')
   time = time.slice(0, 4) + '9';
  return time;
};

const time = "1?:22";

document.getElementById("answer").innerHTML = maximumTime(time);
