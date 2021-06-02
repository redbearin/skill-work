const charAtPos = (items, type) => {
  let startIdx;
  let selectedItems = [];
  // set the starting index
  if (type === 'odd')
    startIdx = items.length - 1;
  else
    startIdx = items.length - 2;
  // go every other index from back
  // add each item to front of selectedItems array
  for (let i = startIdx; i >=0; i -= 2) {
    selectedItems.unshift(items[i]);
  }
  // items an array -- return an array
  if(Array.isArray(items)) 
    return selectedItems;
  // items not an array -- return a string
  return selectedItems.join('');
}
const items = [")", "(", "*", "&", "^", "%", "$", "#", "@", "!"];
const type = "odd";

document.getElementById('ans').textContent = charAtPos(items, type);