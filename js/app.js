'use strict';

alert('Alright, it is time to play a game, please answer Yes/No or Y/n');

var questionCat = prompt('Do I love cats?').toUpperCase();
console.log(questionCat);
if(questionCat === "YES" || questionCat === "Y") {
  alert('That is correct');
} else {
  alert('That is not correct!');
}

var questionMusic = prompt('Do I make experimental music?').toUpperCase();
console.log(questionMusic);
if(questionMusic === "YES" || questionMusic === "Y") {
  alert('That is correct');
} else {
  alert('That is not correct!');
}

var questionPeeps = prompt('Do I love eating peeps?').toUpperCase();
console.log(questionPeeps);
if(questionPeeps === "NO" || questionPeeps === "N") {
  alert('That is correct');
} else {
  alert('That is not correct!');
}

var questionLingual = prompt('Is english the only language that I speak?').toUpperCase();
console.log(questionLingual);
if(questionLingual === "NO" || questionLingual === "N") {
  alert('That is correct');
} else {
  alert('That is not correct!');
} 

var questionSeason = prompt('Do I hate summer as a season').toUpperCase();
console.log(questionSeason);
if(questionSeason === "YES" || questionSeason === "Y") {
  alert('That is correct');
} else {
  alert('That is not correct!');
}