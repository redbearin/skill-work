const topNotes = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    arr[index].notes = arr[index].notes.sort((a,b) => b-a);
    arr[index].topNote = arr[index].notes[0];
    delete arr[index].notes;
   }
   return arr;
 };
 
 const arr = [{ name: "John", notes: [3, 5, 4]}, 
              { name: "Sarah", notes: [6,7,2]}];
 topNotes(arr);