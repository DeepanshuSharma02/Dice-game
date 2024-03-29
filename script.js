
let roll = new Audio('roll.mp3');
function play() {
    var dice1 = Math.floor((Math.random() * 6)) + 1;
    var dice2 = Math.floor((Math.random() * 6)) + 1;
    document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + dice1 + ".png");
    document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + dice2 + ".png");
    roll.play();
    if (dice1 > dice2) {
        document.querySelector("h1").textContent = "Player 1 WINS!💪";
    } else if (dice1 < dice2) {
        document.querySelector("h1").textContent = "Player 2 WINS!💪";
    } else {
        document.querySelector("h1").textContent = "Its a TIE! Try again😁";
    }
}

function reload(){
    play();
}