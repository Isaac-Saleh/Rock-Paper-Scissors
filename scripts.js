/*  Rock = 1
    Paper = 2
    Scissors = 3
*/

function playGame (){








//Creates the random player one hand
var randomNumber1 = Math.floor(Math.random()*3)+1;

var randomPlayImage = "images/rockpaperscissors" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomPlayImage);


// Creates the random player two hand
var randomNumber2 = Math.floor(Math.random()*3)+1;

var randomPlayImage2 = "images/rockpaperscissors" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomPlayImage2);


// Rules for Play
if (randomNumber1 == randomNumber2) {
	document.querySelector("h1").innerHTML = "Draw";
} else if ((randomNumber1 == 1 && randomNumber2 == 3) || (randomNumber1 == 2 && randomNumber2 == 1) || (randomNumber1 == 3 && randomNumber2 == 2)) {
	document.querySelector("h1").innerHTML = "Player 1 Wins!!";
} else {document.querySelector("h1").innerHTML = "Player 2 Wins!!";
}
}

/* FIRST ITERATION BEFORE REFACTORING ABOVE ^^

if (randomNumber1 == randomNumber2) {
	document.querySelector("h1").innerHTML = "Draw";
} else if (randomNumber1 == 1 && randomNumber2 == 3) {
	document.querySelector("h1").innerHTML = "Player 1 Wins!!";
} else if (randomNumber1 == 2 && randomNumber2 == 1) {
	document.querySelector("h1").innerHTML = "Player 1 Wins!!";
} else if  (randomNumber1 == 3 && randomNumber2 == 2) {
	document.querySelector("h1").innerHTML = "Player 1 Wins!!";
} else {document.querySelector("h1").innerHTML = "Player 2 Wins!!";
} */

// function refreshPage(){
//     window.location.reload();
// } 