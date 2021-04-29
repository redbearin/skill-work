R, a programming language used for Statistics and Data Analysis, has the function order, which returns a list with the indices needed to sort the original vector(∗).

For example:

my_arr = [1, 3, 3, 9, 8]
// Ordered would be: [0, 1, 2, 4, 3]
In plain words, order tells you what elements to look at in your original vector to sort it. The list my_arr[0] + my_arr[1] + my_arr[2] + my_arr[4] + my_arr[3] is equivalent to sorted(my_arr).

If two or more elements have the same order, their original order is preserved. Here, [0, 1, 2, 4, 3] and [0, 2, 1, 4, 3] would both sort the vector, but only the first one preserves the original order for the two 3s.

Implement the function order() so that it works the same way it does in R.

Examples
order([9, 1, 4, 5, 4]) ➞ [1, 2, 4, 3, 0]

order(["z", "c", "f", "b", "c"]) ➞ [3, 1, 4, 2, 0]

order(["order", "my", "words"]) ➞ [1, 0, 2]

Notes
Expect numbers and lower-case alphabetic characters only.
Find Part II: Rank here.
Vectors in R are similar to a list. Although vectors in R are 1-indexed, your function should be 0-indexed. Other differences between vectors and lists will be ignored for the scope of this challenge.
If you implement your own algorithm, it must be stable, meaning that the order of identical elements doesn't get switched around.