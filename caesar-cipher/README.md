Create a function that takes two arguments (text, key) and returns a new encrypted text using the key. For example, if the input is "a" and the key is 1, it should move that letter 1 step in alphabetic order so the output would be "b".

Examples
caesarCipher("hello", 5) ➞ "mjqqt"

caesarCipher("hello world", 1) ➞ "ifmmp xpsme"

caesarCipher("a", 2) ➞ "c"

Notes
The input is only letters and spaces; no special characters.