Suppose a pair of identical characters serve as book ends for all characters in between them. Write a function that returns the total number of unique characters (books, so to speak) between all pairs of book ends.

The function will look like:

countUniqueBooks("stringSequence", "bookEnd")

Examples
countUniqueBooks("AZYWABBCATTTA", "A") ➞ 4

// 1st bookend group: "AZYWA" : 3 unique books: "Z", "Y", "W"
// 2nd bookend group: "ATTTA": 1 unique book: "T"
// "ABBCA" not included since the first "A" was used in the 1st bookend group.

countUniqueBooks("$AA$BBCATT$C$$B$", "$") ➞ 3

countUniqueBooks("ZZABCDEF", "Z") ➞ 0

Notes
No book characters will be identical to the bookend character.
There will always be an even number of bookends.
Once a bookend is used to complete a pair, a new bookend must be found to create another pair.
Return 0 if bookends contain zero books.