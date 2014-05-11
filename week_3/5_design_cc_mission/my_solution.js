// I worked [with: Max Diener] on this challenge

// Your mission description:
// Explosions
// Destroy the wall
// Charact
// Wall
// Bomb
// Character places bomb at wall and runs away

// Pseudocode
// 1. Define objects
//  give character attributes (name, bomb(boolean value), distance from wall, move, set timer, health)
//  give bomb attributes (timer, attack strength)
//  wall (health)
// 
// 

// Initial Code
// var theBomber = {
//   name: "Maximillian",
//   bomb: false,
//   distance: 5,
//   health: 100,
//   plant: false,
//   currentDistance: function() {
//     console.log("Your distance is now " + this.distance.toString());
//     if (this.bomb){
//         console.log("The bomb timer is now " + thePackage.timer.toString());        
//     }
//   },
//   move: function(direction) {
//     if(direction === "right") {
//       this.distance -= 1;
//     }
//     else if(direction === "left") {
//       this.distance += 1;
//     }
//     else {
//       console.log("You can't move that way!");
//     }
    
//     if (this.bomb){
//         thePackage.timer -= 1;
//         if (thePackage.timer === 0) {
//           if (this.plant) {
//             if (this.distance > 0) {
//               console.log("Congratulations, you win!")
//             } else {
//               console.log("You blew up the wall! And yourself!")
//             }
//           } else {
//             console.log("You blew yourself up! And not the wall. You lose.")
//           }
//         }
//     }
    
//     this.currentDistance();
//   },
//   bombPlant: function() {
//     if(this.distance === 0){
//       this.plant = true;
//       console.log("The bomb is now planted. You should run away.");
//     }
//   }
// }

// var thePackage = {
//     timer: 10,
//     attackStrength: 100,
// }

// var theWall = {
//     health: 100,
// }

// Refactored Code

var theBomber = {
  hasBomb: false,
  plant: false,
  distance: 5,
  move: function(direction) {
    if (direction === "right") { this.distance -= 1;}
    else if (direction === "left") { this.distance += 1; }
    else { console.log("You can't move that way!"); }

    console.log("You are now " + this.distance.toString() + " feet from the wall.");

    if (this.hasBomb){
      thePackage.timer -= 1;
      if (thePackage.timer === 0) {
        if (this.plant) {
          if (this.distance > 1) {
            console.log("The bomb exploded and blew up the wall! You win!")
          } else {
            console.log("The bomb exploded and blew up the wall... along with you!")
          }
        } else {
          console.log("The bomb exploded in your hands. You lose.")
        }
      } else {
      	console.log("The bomb will explode in " + thePackage.timer.toString() + " moves.");
      }
    }
  },
  bombPlant: function() {
    if(this.distance === 0){
      this.plant = true;
      console.log("The bomb is now planted. You should run away.");
    } else {
    	console.log("You aren't close enough to the wall.");
    }
  }
}

var thePackage = {
    timer: 5,
}

// Tests //
theBomber.move("right");
theBomber.move("right");
theBomber.hasBomb = true;
theBomber.move("right");
theBomber.bombPlant(); // Should not allow
theBomber.move("right");
theBomber.move("right");
theBomber.bombPlant(); // Should allow
theBomber.move("left");
theBomber.move("left"); //Should blow up wall

// Reflection
// This was a good challenge to pair on. Our strategy of coming up with a
// general outline was a good start, though we could have written more pseudo
// code before trying to attempt the challenge. I believe if we had, we would 
// have been able to think about potential issues, and we wouldn't have had to
// reactor our code and reconsider our design as much on the fly.

// This was the first time I had worked with creating and calling methods inside
// objects, so this was good practice. It would have been beneficial to add 
// properties and methods to objects after we had created them, simply from an
// experience standpoint.

// I feel fairly comfortable with the learning competencies. I would have
// enjoyed spending more time refactoring the code and creating a more complete
// game. As it is, the game is win-able, but it is far from perfect. I think
// practicing organization would be a good exercise. Perhaps when I need a JS
// refresher after spending time with Ruby, revisiting this challenge would be
// a good idea.

// The most tedious part of the challenge was debugging code when something
// wasn't working properly. Almost every time, the issue came down to a missing
// comma rather than an egregious syntactic error. Every other aspect, including
// design and pseudo code, was quite fun!
