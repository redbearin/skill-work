The insurance guy calls. They were about to pay you all that fortune you've been anxiously waiting for, but they detected further irregularities; the list of stolen items is misformatted and appears to contain other entries that don't belong there. Find and remove them.

You receive an object with nested objects with strings as values. Convert their values to number and return an object without the entries that evaluate to NaN.

Examples
findAndRemove({
    bedroom: {
      slippers: "10000",
      piano: "550",
      call: "vet",
      travel: "world",
    },
  }) ➞ {
    bedroom: {
      slippers: 10000,
      piano: 5500,
    },
  }

 findAndRemove({
    kitchen: {
      ["gold spoons"]: "900",
      piano: "550",
      notes: "ga0r76ba22g4e",
    },
    cellar: {
      reminder: "dog",
      bottle: "750",
    },
  }) ➞ {
    kitchen: {
      ["gold spoons"]: 900,
      piano: 550,
    },
    cellar: {
      bottle: 750,
    },
  }
Notes
The type of NaN is actually number.
If you have suggestions on how to present or further test this challenge please leave a comment.
This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.