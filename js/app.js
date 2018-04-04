'use strict';

// alert('Alright, it is time to play a game, please answer Yes/No or Y/n');

// var questionCat = prompt('Do I love cats?').toUpperCase();
// console.log(questionCat);
// if(questionCat === "YES" || questionCat === "Y") {
//   alert('Yes! I help foster and raise cats for adoption.');
// } else {
//   alert('Smooth move, ExLax! Goose egg on this one.');
// }

// var questionMusic = prompt('Do I make experimental music?').toUpperCase();
// console.log(questionMusic);
// if(questionMusic === "YES" || questionMusic === "Y") {
//   alert('I friggen love playing the WEIRD stuff!');
// } else {
//   alert('What do you think I am, the Monkees?!');
// }

// var questionPeeps = prompt('Do I love eating peeps?').toUpperCase();
// console.log(questionPeeps);
// if(questionPeeps === "NO" || questionPeeps === "N") {
//   alert('Normal marshmallow is tasty enough, heck no to peeps!');
// } else {
//   alert('Get out of town! WRONG.');
// }

// var questionLingual = prompt('Is english the only language that I speak?').toUpperCase();
// console.log(questionLingual);
// if(questionLingual === "NO" || questionLingual === "N") {
//   alert('Richtig, I grew up speaking German and English!');
// } else {
//   alert('Wrong, bucko, ich spreche Deutsch');
// } 

// var questionSeason = prompt('Do I hate summer as a season?').toUpperCase();
// console.log(questionSeason);
// if(questionSeason === "YES" || questionSeason === "Y") {
//   alert('Yes, the temperature of the earth is too damn high!');
// } else {
//   alert('Wrong, give me the Winter.');
// }

var guessesRemaining = 4

while(guessesRemaining > 0) {
  console.log(guessesRemaining)
  var questionGear = prompt('How many pieces of music gear do I own?')
  console.log(questionGear)
  guessesRemaining--;
  if(parseInt(questionGear) < 16) {
    alert('You need to guess higher');
  }
  if(parseInt(questionGear) > 16) {
    alert('You need to guess lower');
  }
  if(parseInt(questionGear) === 16) {
    alert('That is correct');
    break;
    
  }
}
