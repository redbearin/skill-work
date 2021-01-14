YouTube currently displays a like and a dislike button, allowing you to express your opinions about particular content. It's set up in such a way that you cannot like and dislike a video at the same time.

There are two other interesting rules to be noted about the interface:

Pressing a button, which is already active, will undo your press.
If you press the like button after pressing the dislike button, the like button overwrites the previous "dislike" state. The same is true for the other way round.
Create a function that takes an array of button inputs and returns the final state.

Examples
likeOrDislike(["Dislike"]) ➞ "Dislike"

likeOrDislike(["Like", "Like"]) ➞ "Nothing"

likeOrDislike(["Dislike", "Like"]) ➞ "Like"

likeOrDislike(["Like", "Dislike", "Dislike"]) ➞ "Nothing"

Notes
If no button is currently active, return "Nothing".
If the array is empty, return "Nothing".