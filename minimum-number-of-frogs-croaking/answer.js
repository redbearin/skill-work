const minNumberOfFrogs  = croakOfFrogs =>  {
  const croakArray = croakOfFrogs.split('');
  const counts = {};
  croakArray.forEach(letter => { 
    counts[letter] = (counts[letter] || 0)+1; 
    }
  );
  const countValArray = Object.values(counts);
  const word = Object.keys(counts).join('');

  //only the right letters
  if (word === 'croak') {
    const initialValue = countValArray[0];

    //only right letters in equal quantities
    if (countValArray.every(element => element = initialValue)) {
  
      let repeats = croakArray.length / 5;
      let oneFrog = 'croak';
      for (let times = 1; times < repeats; times++) {
        oneFrog += oneFrog;
      }
      //it is one frog (all letters in right order)
      if (oneFrog === croakOfFrogs) return 1;

      //check to see if it is multiple frogs (broken, but letters in right order)
      else {
        for (let index = 0; index < oneFrog.length; index++) {
          for (let index1 = 0; index1 < croakArray.length; index1++) {

            //not right order for multiple frogs
            if (index1 === croakArray.length - 1 && croakArray[index1] !== oneFrog[index]) return -1;

            //right order to continue
            if (croakArray[index1] === oneFrog[index]) {
              croakArray.splice(index1, 1);
              break;
            }
          }
        }

        //multiple frogs, right order
        return repeats;
      }
    }
  } 

  //not only right letters
  else {   
    return -1;
  }
}

let croakOfFrogs = 'crcoakroaroak';
minNumberOfFrogs(croakOfFrogs);