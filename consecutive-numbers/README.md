Given an array of random digits of any length, return true if the number n appears times times in a row, and false otherwise.

Worked Example
isThereConsecutive([1, 3, 5, 5, 3, 3, 1], 3, 2) ➞ true
// Second parameter is the number to look out for (3).
// Third parameter means you need to find the number 3 twice in a row.
// Return true if it can be found.
Examples
isThereConsecutive([1, 2, 3, 4, 5], 1, 1) ➞ true

isThereConsecutive([3], 1, 0) ➞ true

isThereConsecutive([2, 2, 3, 2, 2, 2, 2, 3, 4, 1, 5], 3, 2) ➞ false

isThereConsecutive([5, 5, 5, 5, 5], 5, 7) ➞ false

Notes
Arrays will only contain positive single digit numbers.
Expect all parameters to be valid.