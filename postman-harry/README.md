Harry is a postman. He's got a post office with a size of n*m(a matrix / 2D array). Each slot at the 2D array represents the number of letters in that spot. Harry can only go right and down. He starts at (0, 0), and ends at (n-1, m-1). n represents the height, and m the length. Return the maximum amount of letters he can pick up. He can only pick up letters if he is on that spot.

Examples
harry([[5, 2], [5, 2]]) ➞ 12
// (5+5+2)


harry([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
]) ➞ 72
// (1+6+11+12+13+14+15)


harry([[]]) ➞ -1

Notes
If the matrix is empty, return -1.

First option: 
The subarray with the high sum is always the last element in the array.
Second option:
The subarray with the highest sum can be anywhere in the array. This means the first subarray elements are added before the subarray that has the highest sum and the last subarray elements are addedd after the subarray with the highest sum.