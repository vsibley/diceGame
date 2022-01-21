let randoNumber1 = Math.floor(Math.random() * 6) + 1; 
let randoNumber2 = Math.floor(Math.random() * 6) + 1;

let randoDice = "dice" + randoNumber1 + ".png";
let randoImgs = "images/" + randoDice;
let randoDice2 = 'dice' + randoNumber2 + ".png";
let randoImgs2 = "images/" + randoDice2;

document.querySelectorAll("img")[0].setAttribute
("src", randoImgs);

document.querySelectorAll("img")[1].setAttribute("src", randoImgs2);


if (randoNumber1 > randoNumber2) {
document.querySelector("h1").innerHTML = "Player 1 is the winner!";
} else if (randoNumber1 < randoNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 is the winner!";
} else if (randoNumber1 = randoNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}


// document.querySelector(".img1").setAttribute("src", "images/dice" + randomN1 + ".png");

