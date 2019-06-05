'use strict';

alert('Hello you');
    var personsName = prompt('What is your name?');
    alert('Hi, ' + personsName );

var playGame = confirm('Do you want to play a game?');
console.log(playGame);
if (playGame) {
  var howOld = prompt('Am I old? Yes or No');
  var standardhowOld = howOld.toUpperCase();
  console.log(howOld);
  if (standardhowOld === "YES") {
    alert( 'Incorrect');
    } else {
    alert('Correct')
    }
 
  }
  if (playGame) {
    var sports = prompt('Do I play sports? Yes or No');
    var standardSports = sports.toUpperCase();
    console.log(standardSports);
    if (standardSports === "YES") {
        alert( 'Yeah i do');
        } else {
        alert('Got that wrong')
        }

    }

  if (playGame) {
    var drive = prompt('Do I drive to school? Yes or No');
    var standardDrive = drive.toUpperCase();
    console.log(standardDrive);
    if (standardDrive === "YES") {
        alert( 'Yeah i do');
        } else {
        alert('Incorrect')
        }

    }

  if (playGame) {
    var hair = prompt('Do I have red hair? Yes or No');
    var standardHair = hair.toUpperCase();
    console.log(standardHair);
    if (standardHair === "YES") {
        alert( 'Correct');
        } else {
        alert('Wrong pay more attention')
        }

    }
  
  if (playGame) {
    var classes = prompt('Am i taking classes? Yes or No');
    var standardClasses = classes.toUpperCase();
    console.log(standardClasses);
    if (standardSports === "YES") {
        alert( 'Yes i am');
        } else {
        alert('Wrong i am taking classes')
        }

    }
//var age = parseInt(howOld);
  