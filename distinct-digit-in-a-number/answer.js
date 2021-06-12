const numTest = (num) => {
  const regex = /(\d)\1/g;
  if(regex.test(num)) 
    return false;
  return true;
}

const num = "1025";

document.getElementById('ans').textContent = numTest(num);
