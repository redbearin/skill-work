NOTE: 
answer - using for loops (no built-in methods)
answer 1 - using array.reduce

In this exercise the goal is to extend the Math() object adding four methods for calculate different types of averages.

Arithmetic Mean: The division of the sum of the numbers by the quantity of numbers.
avg of [A, B, C] ➞ (A + B + C) / 3

Quadratic Mean: Also called Root Mean Square, is the square root of the arithmetic mean of the squared numbers.
qAvg of [A, B, C] ➞ ²√ ( (A² + B² + C²) / 3 )

Harmonic Mean: is the reciprocal of the arithmetic mean of the numbers reciprocals.
hAvg of [A, B, C] ➞ ( (A⁻¹ + B⁻¹ + C⁻¹) / 3 )⁻¹

Geometric Mean: is the n-th root of the product of the numbers, where n is the quantity of numbers.
gAvg of [A, B, C] ➞ ³√ (A * B * C)

For each average type build a function that, given a required parameter (the array containing the numbers) and an optional one (the precision, or number of floating digits to return) returns the result as a number.

Examples
Math.avg([3, 5, 7])➞ 5
//Precision is an optional parameter.
// (3 + 5 + 7) / 3 = 15 / 3 = 5

Math.qAvg([3, 5, 7], 1) ➞ 5.3
// ²√ ( (3² + 5² + 7²) / 3 ) = ²√ (83 / 3) = 5.3

Math.hAvg([3, 5, 7], 1) ➞ 4.4
// Precision is required only for the final result.
// (3⁻¹ + 5⁻¹ + 7⁻¹) / 3 )⁻¹ = (0.676... / 3)⁻¹ = 4.4

Math.gAvg([3, 5, 7], 1) ➞ 4.7
// ³√ (3 * 5 * 7) = ³√ 105 = 4.7

Notes
Pay attention to cumulative rounding errors! Precision is required only if the parameter is indicated and only for the final result.
All given arrays are valid ones containing positive numbers greater than zero, either integers or float.

REVISION NOTE: Implementing a method for to get the n-th root of a number can lead to rounding imprecisions if you use a combination of exponential and logarithm instead of a direct formula. Thanks to @Pustur and @xAlien95, see the Comments tab for more info. After the update, some old solution could fail the last test for the geometric average.