In this challenge, establish which type of constrained writing is applied to a sentence. There are four possible types to detect:

Pangram: the sentence contains all the 26 letters of the English alphabet.
Heterogram: the sentence doesn't have multiple instances of its letters (as to say that every letter is unique).
Tautogram: every word of the sentence starts with the same letter.
Transgram: all words of the sentence share at least a common letter.
Given a string txt being a sentence, implement a function that returns the strings "Pangram", "Heterogram", "Tautogram" or "Transgram" accordingly to the above definitions and following the same given order to establish the result. If no constrained writing is detected, return the string "Sentence".

Examples

constraint("The quick brown fox jumps over the lazy dog.") ➞ "Pangram"
// The sentence contains every letter of the alphabet.
// Repetitions are not considered.

constraint("The big dwarf only jumps.") ➞ "Heterogram"
// The sentence has only unique characters.

constraint("Todd told Tom to take the tiny turtles.") ➞ "Tautogram"
// Every word starts with the letter "t".

constraint("A cannibal alligator has attacked an unaware vegan alligator.") ➞ "Transgram"
// Every word contains the letter "a".

constraint("The unbearable lightness of coding...") ➞ "Sentence"
// No constraint is applied to the sentence.

Notes
Output: Pangram: true, Heterogram: false, Tautogram: true, Transgram: false; (the values may be either true or false)

Sentences will contain letters (either uppercase or lowercase) and punctuation. Your function must be case-insensitive.