class Pagination {
  constructor(alphabetArray, items) {
    this.alphabetArray = alphabetArray;
    this.items = items;
    this.currentIndex = 0;
    this.arr = [];
  }

  // goes to the next page of the book
  nextPage() {
    this.arr = [];
    let start = this.currentIndex + items;
    let end = start + items;

    // you are already on the last page
    if (start > this.alphabetArray.length - 1) {
      console.log('You are on the last page. There is no next page.')
    }
    // not at the end
    if (start + items - 1 <= this.alphabetArray.length - 1) {
      for (let index = start; index < end; index++) {
        this.arr.push(this.alphabetArray[index]);
      }
      this.currentIndex = start; 
    }
    // next page is last page 
    else {
      for (let index = start; index < this.alphabetArray.length; index++) {
        this.arr.push(this.alphabetArray[index]);
      }
      this.currentIndex = this.alphabetArray.length - 1;
    }
  }

  // go to the previous page
  prevPage() {
    this.arr = [];
    // adjust for pages that are not full
    this.currentIndex = this.currentIndex - (this.currentIndex % items);

    // already on first page
    if (!this.currentIndex) {
      console.log("You are on the first page. There are no previous pages.");
    }
    // not on first page
    else {
      let start = this.currentIndex - items;
      for (let index = start; index < this.currentIndex; index++) {
        this.arr.push(this.alphabetArray[index]);
      }
      this.currentIndex = start; 
    }
  }

  // go to first page
  firstPage() {
    this.arr = [];
    for (let index = 0; index < items; index++) {
        this.arr.push(this.alphabetArray[index]);
    }
    this.currentIndex = 0; 
  }

  // go to last page
  lastPage() {
    this.arr = [];
    // first index on last page
    let start = Math.floor(this.alphabetArray.length / items) * items
    // add the last page items to last page array
    for (let index = start; index < this.alphabetArray.length; index++) {
        this.arr.push(this.alphabetArray[index]);
    }
    this.currentIndex = this.alphabetArray.length - 1;
  }

  // print items on that page
  getVisibleItems() {
    if(this.arr.length) 
      console.log(this.arr);
  }
}

const str = "abcdefghijklmnopqrstuvwxyz";
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split('');
const items = 4;

let p = new Pagination(alphabetArray, items);
p.nextPage();
console.log(p.getVisibleItems());
p.nextPage();
console.log(p.getVisibleItems());
p.nextPage();
console.log(p.getVisibleItems());
p.nextPage();
console.log(p.getVisibleItems());
p.nextPage();
console.log(p.getVisibleItems());
p.nextPage();
console.log(p.getVisibleItems());
p.nextPage();
console.log(p.getVisibleItems());
p.nextPage();
console.log(p.getVisibleItems());
p.prevPage();
console.log(p.getVisibleItems());
p.prevPage();
console.log(p.getVisibleItems());
p.prevPage();
console.log(p.getVisibleItems());
p.prevPage();
console.log(p.getVisibleItems());
p.prevPage();
console.log(p.getVisibleItems());
p.prevPage();
console.log(p.getVisibleItems());
p.prevPage();
console.log(p.getVisibleItems());
p.nextPage();
console.log(p.getVisibleItems());
p.firstPage();
console.log(p.getVisibleItems());
p.lastPage();
console.log(p.getVisibleItems());