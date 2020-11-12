const nearestChapter = (chapters, page) => {
  let smallestDis = Infinity;
  let finalChap;
  for (key in chapters) {
    if (smallestDis > Math.abs(page - chapters[key]) || 
        smallestDis === Math.abs(page - chapters[key])) {
      smallestDis = Math.abs(page - chapters[key]);
      finalChap = key;
    }
  }
  return finalChap;
};

const chapters = {
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
};

const page = 3;

nearestChapter(chapters, page);