A number is gapful if it is at least 3 digits long and is divisible by the number formed by stringing the first and last numbers together. The smallest number that fits this description is 100. First digit is 1, last digit is 0, forming 10, which is a factor of 100. Therefore, 100 is gapful.

Create a function that takes a number n and returns the closest gapful number (including itself). If there are 2 gapful numbers that are equidistant to n, return the lower one.

Examples
gapful(25) ➞ 100

gapful(100) ➞ 100

gapful(103) ➞ 105

gapful(1442) ➞ 1441

Notes
N/A