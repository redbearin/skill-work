const minMutation = (start, end, bank) => {
  let count = 0;
  for (let index = 0; index <  bank.length; index++) {
    //gene sequence of end is in the bank
    if (bank[index] === end) {
      for (let index1 = 0; index1 < start.length; index1++) {
        //increase count if start gene is different than bank gene
        if(bank[index][index1] !== start[index1]) 
          count++;
      }
      //return genes that are different
      return count;
    }
  }
  //end does not match anything in bank
  return -1;
}

const start = "AAAAACCC";
const end =  "AACCCCCC";
const bank = ["AAAACCCC", "AAACCCCC", "AACCCCCC"];
