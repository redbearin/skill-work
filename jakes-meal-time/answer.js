const timeToEat = (str) => {
  // break the string on the space
  // idx 0 - time, idx 1 a.m. or p.m.
  const strArr = str.split(' ');
  // break time into hours and minutes
  // idx 0 - hours, idx 1 - min
  const time = strArr[0].split(':');
  // p.m. time
  if (strArr[1][0] === 'p') {
    // time 12:00 - 12:59 pm
    if (time[0] === '12') {
      if (time[1] === '00')
        return [0, 0];
      return [6, 60 - +time[1]];
    }  
    // time 1:00 pm - 6:59 pm    
    if (time[0] < '7') {
      if (time[1] === '00')
        return [7- +time[0], 0];
      return [6 - +time[0], 60- +time[1]]
    }
    // time 7:00 p.m.
    if (time [0] === '7' && time[1] === '00')
      return [0, 0];
    // time 7:01 pm - 11:59 p.m. 
    else {
      if (time[1] === '00')
        return [19 - +time[0], 0];
      return [18 - +time[0], 60 - +time[1]]
    }
  }
  // a.m. time
  else {
    // time 12 a.m. - 12:59 a.m.
    if (time[0] === '12') {
      if (time[1] === '00')
        return [7, 0];
      return [6, 60 - +time[1]];
    } 
    // time 1:00 a.m. - 6:59 a.m.
    if (time[0] < 7) {
      if (time[1] === '00')
        return [7- +time[0], 0];
      return [6 - +time[0], 60- +time[1]]
    }
    // time 7:00 a.m.
    if (time [0] === '7' && time[1] === '00')
      return [0, 0];
    // time 7:01 - 11:59 a.m.
    else {
      if (time[1] === '00')
        return [12 - +time[0], 0];
      return [11 - +time[0], 60 - +time[1]]
    }
  }
}

const str = "5:50 a.m.";

document.getElementById('ans').textContent = timeToEat(str);
