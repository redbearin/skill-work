Write a function that adds two numbers. The catch, however, is that the numbers will be strings.

Examples
addStrNums("4", "5") ➞ "9"

addStrNums("abcdefg", "3") ➞ "-1"

addStrNums("1", "") ➞ "1"

addStrNums("1874682736267235927359283579235789257", "32652983572985729") ➞ "1874682736267235927391936562808774986"

Notes
If there are any non-numerical characters, return "-1".
An empty parameter should be treated as "0".
Your function should be able to add any size number.
Your function doesn't have to add negative numbers.
Zeros at the beginning of the string should be trimmed.