Make a function that takes a 2D array and returns true if it is a Magic Square and false if it is not. A Magic Square is an arrangement of numbers in a square in such a way that the sum of each row, column, and diagonal is one constant number, the "magic constant".

Examples
isMagic([[2, 7, 6], [9, 5, 1], [4, 3, 8]]) ➞ true
// Rows: 2+7+6 = 9+5+1 = 4+3+8 = 15
// Columns: 2+9+4 = 7+5+3 = 6+1+8 = 15
// Diagonals: 2+5+8 = 6+5+4 = 15

isMagic([[1, 2], [3, 4]]) ➞ false
// Rows: 1+2 = 3 != 3+4 = 7
// Columns: 1+3 = 4 != 2+4 = 6
// Diagonals: 1+4 = 2+3 = 5

Notes
For this challenge, I will only be testing with magic squares made with whole numbers ranging from 1 to n^2.