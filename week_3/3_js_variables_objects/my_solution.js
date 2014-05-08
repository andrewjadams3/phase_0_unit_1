// I worked on this challenge [by myself]




// Pseudocode
//
// secret number = 7
// password = "just open the door"
// allowed in = false
// members = [john, billy, jim, mary]


// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", "Billy", "Jim", "Mary"];


// __________________________________________
// Refactored Code: Include a refactored version (or justification of your
// original code) here.
//
//  I believe the code is already as concise as it needs to be. There are only
// four lines of code, and each line helps mulitple tests pass. There is no
// repeated code, and each variable is readable and understandable. 


// __________________________________________
//  Reflection: Use the reflection guidelines to write a reflection here. 
//
// This challenge was very straightforward. I began by looking at each test and
// determining what they were looking for. It became clear that each test was
// looking for a specific variable with certain properties (typeof and value).
// This allowed me to easily translate these tests into a small number of
// passing variables. I already feel very comfortable with these aspects of
// Javascript. I didn't learn anything particularly new or interesting, but it
// was good practice to be able to write code for a specific set of tests. I'm
// looking forward to experimenting more with TDD, and beginning to write my own
// tests soon.


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

