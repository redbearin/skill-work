class Pagination {
  constructor(alphabetArray, pages) {
    this.alphabetArray = alphabetArray;
    this.pages = pages;
    this.currentIndex = 0;
    this.arr = [];
  }
  // goes to the next page of the book
  nextPage() {
    this.arr = []
    let end;
    // not at the end
    if (this.currentIndex + this.pages <= this.alphabetArray.length - 1)
      end = this.currentIndex + this.pages;
    // next page is last page or there are no more pages
    if (this.currentIndex + this.pages > alphabetArray.length) {
      end = this.alphabetArray.length;
      if (this.currentIndex > this.alphabetArray.length) {
        console.log('there are no more pages');
      }
    }
    // add the items to the page
    for (let index = this.currentIndex; index < end; index++) {
      this.arr.push(this.alphabetArray[index]);
    }
    this.currentIndex = end; 
  }
  getVisibleItems() {
    console.log(this.arr);
  }
}

const str = "abcdefghijklmnopqrstuvwxyz";
const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split('');
const pages = 4;

let p = new Pagination(alphabetArray, pages);
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