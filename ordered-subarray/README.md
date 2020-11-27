Given two arrays smarr and bigarr, we say smlst is an ordered subarray of bigarr if all the elements of smarr can be found in bigarr, and in the same order.

Examples:

[4, 3, 2] is an ordered subarray of [5, 4, 3, 2, 1].
[5, 3, 1] is an ordered subarray of [5, 4, 3, 2, 1].
[5, 3, 1] is not and ordered subarray of [1, 2, 3, 4, 5] since elements are not in the same - [1, 2, 3] is an ordered subarray of [3, 2, 1, 2, 3].
Write a function that, given arrays smarr and bigarr, decides if smarr is an ordered subarray of bigarr.

Examples
isOrdSub([4, 3, 2], [5, 4, 3, 2, 1]) ➞ true

isOrdSub([5, 3, 1], [5, 4, 3, 2, 1]) ➞ true

isOrdSub([5, 3, 1], [1, 2, 3, 4, 5]) ➞ false

isOrdSub([1, 2, 3], [3, 2, 1, 2, 3]) ➞ true
Notes
Be careful of examples like the fourth example, where the elements of smarr appear multiple times in bigarr.