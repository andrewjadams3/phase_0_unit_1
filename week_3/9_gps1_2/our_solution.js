// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Andrew Adams
//  2. Hethe Berg


// 1. "YOU SIGNED... WHO?!"

function Client(name, age, quote){
  this.name = name;
  this.age = age;
  this.quote = quote;
}

var georgeClooney = new Client("George Clooney",52,"My name is George Clooney.");

var jeffDaniels = new Client("Jeff Daniels", 59, "You sold my dead bird to blind kid?");


// 2. "Here they Come!"

var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");

var kristenBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");

var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");

// 3. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");

var clientList = [georgeClooney, jeffDaniels, adamSandler, kristenBell, jimCarrey, shooterMcGavin];

/* Tests */
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

// 4. "SHOW 'EM OFF!"

var prettyPrint = function (person){
    alert("Name: " + person.name + ", age: " + String(person.age) + ", quote: " + person.quote);
}

// ** BONUS **


//  Your Reflection:
// This is a good exercise to practice manipulating and creating objects. I was
// not familiar with constructors before this challenge, and I'm interested
// in learning more. This was a good opportunity to practice research with a
// partner since we both encountered issues with the challenge. In the future, I
// will be more willing to speak up about what I don't know and talk through my
// thought process when researching something new.