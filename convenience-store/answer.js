const enoughChange = (change, total)  => {
  if ((change[0] * .25) + 
      (change[1] * .10) + 
      (change[2] * .05) + 
      (change[3] * .01) >= total)  
    return true;
  else
    return false;
}
const change  = [0, 0, 20, 5];
const total = 0.75;
enoughChange(change, total);