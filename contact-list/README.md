sortContacts([
  "John Locke",
  "Thomas Aquinas",
  "David Hume",
  "Rene Descartes"
], "ASC") ➞ [
  "Thomas Aquinas",
  "Rene Descartes",
  "David Hume",
  "John Locke"
]

// Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)

sortContacts([
  "Paul Erdos",
  "Leonhard Euler",
  "Carl Gauss"
], "DESC") ➞ [
  "Carl Gauss",
  "Leonhard Euler",
  "Paul Erdos"
]

// Gauss (G) > Erdos (ER) > Euler (EU)

sortContacts([], "DESC") ➞ []

sortContacts(null, "DESC") ➞ []

sortContacts(undefined, "DESC") ➞ []