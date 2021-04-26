const license = (me, agents, others) => {
  // create array of others
  const otrArr = others.split(' ');
  // add me to array of others
  otrArr.push(me);
  // sort the array
  otrArr.sort();
  // locate the position of me
  const position = otrArr.indexOf(me) + 1;
  //determine time based on position
  return Math.ceil(position / agents) * 20;
};

const me = "Aaron";
const agents = 3;
const others = "Jane Max Olivia Sam";

document.getElementById('ans').textContent = license(me, agents, others);