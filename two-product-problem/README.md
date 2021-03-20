Create a function that takes an array arr and a number n and returns an array of two integers from arr whose product is that of the number n of the following form:

[value_at_lower_index, value_at_higher_index]
Make sure that you return an array of two integers that exactly divides n (product of n) and that the indices coincide the above format. The sorting of the values therefore is based on the indices ascendingly.

Examples
twoProduct([1, 2, -1, 4, 5], 20) ➞ [4, 5]
// At index 4 which has the value 5 is then called a full match to the
// value at index 3 which is 4.
// A full match can only be achieved  if you've found the multiplier at an
// index lower than the current index, thus, 5 (@ index 4) has a pair lower
// than its index which is the value 4 (@ index 3), so, 5*4 = 20, in which 5
// has a higher index (4) than 4 which has an index value of 3.

twoProduct([1, 2, 3, 4, 5], 10) ➞ [2, 5]

twoProduct([100, 12, 4, 1, 2], 15) ➞ undefined

Notes
There will be no duplicates.
Return undefined if no match is found.
The array can have multiple solutions (products of n), so return the first full match that's found (as described above).