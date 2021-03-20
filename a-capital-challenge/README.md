Given two strings, str1 and str2, select only the characters in each string where the character in the same position in the other string is in uppercase. Return these as a single string.

To illustrate, given the strings str1 = "heLLo" and str2 = "GUlp", we select the letters "he" from str1, because "G" and "U" are uppercase. We then select "lp" from str2, because "LL" is in uppercase. Finally, we join these together and return "help".

Examples
selectLetters("heLLO", "GUlp") ➞ "help"

selectLetters("1234567", "XxXxX")  ➞ "135"

selectLetters("EVERYTHING", "SomeThings") ➞  "EYSomeThings"

Notes
The strings don't have to be the same length.
Strings can contain non-alphabetic characters.