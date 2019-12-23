// // this is my first JS code!
// /*
// console.log('Hello World!');
// let name = 'Ben'; // String Literal
// let age = 19; // Number Literal
// let isApproved = true

// alert('Hello' )

// let person = {
//     name: 'Sam',
//     age: 17
// };
// console.log(person.name);

// //Dot notation
// person.name = 'Ben';

// //Array
// let selectedColors = ['Blue', 'Green'];
// selectedColors[2] = 30;
// console.log(selectedColors.length);

// */

// // function greet(name, lastName) {
// //     console.log("Hello " + name + ' ' + lastName)
// // }

// // greet('Sam', 'Eger');

// let points = 50;
// let type = points > 50 ? 'Gold' : 'Silver';

// let goodCreditScore = true;
// let goodBackground = false;
// let applicationAccepted = goodCreditScore && goodBackground;

// // || operator isn't just for boolean values. It can be used for
// // falsy and truthy values
// // falsy:
// // undefined, null, 0, '', false, NaN

// let userColor = undefined;
// let defaultColor = 'Red';
// let currentColor = userColor || defaultColor;

// //If statemens!

// let hour = 10;

// if (hour >= 6 && hour < 12) {
//     console.log('Good morning');
//     console.log('Curly braces are only used w/ mult. lines!')
// }
// else if (hour >= 12 && hour < 18)
//     console.log('Good afternoon');
// else
//     console.log('Good evening!');

// let role = 'moderator';

// if (role === 'guest') console.log('Guest user');
// else if (role === 'moderator') console.log('Moderator');
// else console.log('Unknown user')

// //For loops!
// for (let i = 1; i<=5; i += 2)
//     console.log(i)

// //While loops!
// let i = 0;
// while (i<=5) {
//     console.log("Hello there.");
//     i ++;
// }

// //Do while loops are used infrequently

// let employee = {
//     name: 'Sam',
//     wage: 17,
// };

// for (key in employee)
//     console.log(key, employee[key])

// let colors = ['red', 'blue', 'yellow'];
// for (let color of colors){
//     console.log(color);
// }

// function max(a, b) {
//   return a > b ? a : b;
// }

// console.log(max(1, 2));

// function isLandscape(width, height) {
//   return width > height;
// }

// console.log(isLandscape(10, 15));

let output = fizzBuzz(true);
console.log(output);

function fizzBuzz(num) {
  if (num % 15 === 0) return "FizzBuzz";
  else if (num % 5 === 0) return "Buzz";
  else if (num % 3 === 0) return "Fizz";
  else return typeof num === Number ? num : NaN;
}
