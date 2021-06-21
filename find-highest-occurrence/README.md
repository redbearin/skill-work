Create a function that takes an array, finds the most repeated element(s) within it and returns it/them in an array (order not important). The function should work for both integers and strings mixed together within the input array (e.g. [1, 1, "a"]).

Examples
highestOccurrence([2, 3, 2, 5, 6, 7, 2]) ➞ [2]

highestOccurrence([1, 2, 3, 3, "a", "b", "b", "c"]) ➞ [3, "b"]

highestOccurrence(["it", "keeps", "coding", "on", "or", "it", "gets", "the", "hose"]) ➞ ["it"]

Notes
If there is a tie for highest occurrence, return both (see second example above).
Don't let integers become strings and/or string become integers in the result.
NaN counts as a number.