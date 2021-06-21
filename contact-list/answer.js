const sortContacts = (arr, dir) => {
  // handle cases where arr is null or undefined
  if (arr === null || arr === undefined)
    arr = [];
  const names = [];
  const final = [];

  // create arr of subarrays with first and last names
  for (let index = 0; index < arr.length; index++) {
    names.push(arr[index].split(' '));
  }
  // ascending sort
  if (dir === "ASC") {
    names.sort((a,b) => {
      if (a[1] < b[1]) 
        return -1;
      if (a[1] > b[1]) 
        return 1;
      else {
        if(a[1][1] > b[1][1])
          return 1;
        else
          return -1;
      }
    });
  }
  // descending sort
  else 
    names.sort((a,b) => {
      if (b[1] < a[1]) 
        return -1;
      if (b[1] > a[1]) 
        return 1;
      else {
        if(b[1][1] > a[1][1])
          return 1;
        else
          return -1;
      }
    });
  // make names into strings again
  for (let index = 0; index < names.length; index++) {
    final.push(names[index].join(' '));
  }
  return final;
};

const arr = [
  "Paul Erdos",
  "Leonhard Euler",
  "Carl Gauss"
];
const dir = "DESC";
sortContacts(arr, dir);