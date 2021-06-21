Create a function that tests if a number is the exact upper bound of the factorial of n. If so, return an array of the exact factorial bound and n, or otherwise, the string "Not exact!".

Examples
isExact(6) ➞ [6, 3]

isExact(24) ➞ [24, 4]

isExact(125) ➞ "Not exact!"

isExact(720) ➞ [720, 6]

isExact(1024) ➞ "Not exact!"

isExact(40320) ➞ [40320, 8]

Notes
There will be no exceptions to handle, all inputs are positive integers.