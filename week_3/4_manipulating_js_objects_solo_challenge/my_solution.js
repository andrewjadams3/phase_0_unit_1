// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}

/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

Define variable adam
adam = { }

2. Give adam a name property with the value "Adam".

within adam obejct
set name: "Adam" (string)

3. Add a spouse property to terah and assign it the value of adam.

set spouse to adam

4. Change the value of the terah weight property to 125.

set terah.weight to 125 (number)

5. Remove the eyeColor property from terah.

delete terah eyecolor

6. Add a spouse property to adam and assign it the value of terah.

set adam spouse to terah

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

set terah children to { } (empty object)

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

set terah children carson to { }
set name to "Carson" (string)

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

set terah children carter to { }
set name to "Carter" (string)

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

set terah children colton to { }
set name to "Colton" (string)

11. Add a children property to adam and assign it the value of terah children.

within adam
set children = terah.children

*/

// __________________________________________
// Write your code below.

var adam = {
  name: "Adam",
};
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = { };
terah.children.carson = { };
terah.children.carson.name = "Carson";
terah.children.carter = { };
terah.children.carter.name = "Carter";
terah.children.colton = { };
terah.children.colton.name = "Colton";
adam.children = terah.children;

// __________________________________________
// Reflection: Use the reflection guidelines
// Writing out the pseudo code was a little time consuming, but it did give me a
// better strategy for approaching the problem. It allowed me to think through
// the implications of my approach without writing and testing code multiple 
// times.
// I had a general idea of how to remove a property from an object, but I needed
// to look it up to make sure I had the syntax correct. I also initially failed
// to read the instructions, and started manipulating the initial terah object.
// This caused some of my code to fail, particularly when I tried to set spouse
// to adam. I assume this is because adam had not yet been defined. From now on,
// I will be sure to read all instructions before jumping to conclusions and 
// wasting time.
// I enjoyed the thought that was required before setting children objects.
// Viewing the chaining in the tests helped me visualize how each child should
// be initialized.

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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)