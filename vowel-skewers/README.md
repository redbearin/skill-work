An authentic vowel skewer is a skewer with a delicious and juicy mix of consonants and vowels. However, the way they are made must be just right:

Skewers must begin and end with a consonant.
Skewers must alternate between consonants and vowels.
There must be an even spacing between each letter on the skewer, so that there is a consistent flavour throughout.
Create a function which returns whether a given vowel skewer is authentic.

Examples
isAuthenticSkewer("B--A--N--A--N--A--S") ➞ true

isAuthenticSkewer("A--X--E") ➞ false
// Should start and end with a consonant.

isAuthenticSkewer("C-L-A-P") ➞ false
// Should alternate between consonants and vowels.

isAuthenticSkewer("M--A---T-E-S") ➞ false
// Should have consistent spacing between letters.
Notes
All tests will be given in uppercase.
Strings without any actual skewer "-" or letters should return false.