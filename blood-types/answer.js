const canGiveBlood = (per1, per2) => {
  if (per1 === per2 || 
      per1 === 'O-' || 
      per1 === 'O+' && per2.includes('+'))
    return true;
  else if (per1.includes('A') && per2.includes('A'))
    return per1.includes('+') && !per2.includes('+') ?
      false : true;
  else if (per1.includes('B') && per2.includes('B')){
    return per1.includes('+') && !per2.includes('+') ?
      false : true;
  }
  else
    return false;
};

const per1 = "O+";
const per2 = "A+";

canGiveBlood(per1, per2);