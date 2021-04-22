const truncateSentence = (s, k) => {
  return s.split(' ').slice(0, k).join(' ');
};

const s = "chopper is not a tanuki";
const k = 5;

document.getElementById('ans').innerHTML = truncateSentence(s, k);