class Pagination {
  constructor(alphabetArray, items) {
    this.alphabetArray = alphabetArray;
    this.items = items;
    this.currentIndex = 0;
    this.arr = [];
  }
  // goes to the next page of the book
  nextPage() {
    this.arr = []
    let end;
    // not at the end
    if (this.currentIndex + this.items <= this.alphabetArray.length - 1)
      end = this.currentIndex + this.items;
    // next page is last page or there are no more items
    if (this.currentIndex + this.items > alphabetArray.length) {
      end = this.alphabetArray.length;
      if (this.currentIndex > this.alphabetArray.length) {
        console.log('there are no more items');
      }
    }
    // add the items to the page
    for (let index = this.currentIndex; index < end; index++) {
      this.arr.push(this.alphabetArray[index]);
    }
    this.currentIndex = end; 
  }
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