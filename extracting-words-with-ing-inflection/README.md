Write a function that takes a string as an argument and returns a list of all the words inflected by "-ing". Your function should also exclude all the mono-syllabic words ending in "-ing" (e.g. bing, sing, sling, ...). Although these words end in "-ing", the "-ing" is not an inflection affix.

Examples
ingExtractor("coming bringing Letting sing") ➞ ["coming", "bringing", "Letting"]

ingExtractor("going Ping, king sHrink dOing") ➞ ["going",, "dOing"]

ingExtractor("zing went ring, ding wing SINk") ➞ []

Notes
Mono-syllabic means the word must include two or more of the letters a, e, i, o, u.
It's probably best to use RegEx for this challenge.