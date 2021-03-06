Create a function that takes a string and determine if it's a valid sequence by either returning true or false. The string will be composed of + and = symbols with several characters between them (e.g. "++d+===+c++==a") and for the string to be true, each letter must be surrounded by a + symbol. So the string to the left would be false.

Examples
simpleSymbols("f++d+") ➞ false

simpleSymbols("+d+=3=+s+") ➞ true

simpleSymbols("==+p+++++++++====8+z++++") ➞ true

Notes
The given string will not be empty and will have at least one letter.