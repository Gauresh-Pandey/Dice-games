var randomNumber =  Math.floor(Math.random()*6) + 1;
var randomDiceImage = "dice" + randomNumber + ".png"
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImagesSource2 = "images/dice" + randomNumber2 + ".png"
var image2 = document.querySelectorAll("img")[1].setAttribute("src" , randomImagesSource2);

if(randomNumber > randomNumber2){
     document.querySelector("h1").innerHTML = "Player1 wins";
}
else if(randomNumber2 > randomNumber){
     document.querySelector("h1").innerHTML = "player2 wins";
}
else{
     document.querySelector("h1").innerHTML = "Draw";
}