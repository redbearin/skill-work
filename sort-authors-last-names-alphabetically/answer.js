const sortByLastName = (authors) => {
  //split the author name into an array with first and last name
  for (let index = 0; index < authors.length; index++) 
    authors[index].author = authors[index].author.split(' ');
    
  authors.sort((a,b) => {
    lastNameA = a.author[1];
    lastNameB = b.author[1];
    if (lastNameA < lastNameB) 
      return -1;
    if (lastNameA > lastNameB) 
      return 1;
    // last names the same
    return 0;
  });
  return authors;
}

const authors = [
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
]

sortByLastName(authors);