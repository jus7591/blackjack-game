let player = {
    name: "Player",
    chips: 145
}

let cardsArray = [];
let sum = 0;
let blackjack = false;
let isAlive = false;
let message = "";
let reset = false;

document.getElementById("nameBalance").textContent = player.name + ": $" + player.chips;

function start() {
    if (reset === false) {
        isAlive = true;
        blackjack = false;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cardsArray = [firstCard, secondCard];
        sum = firstCard + secondCard;
        renderGame();
    }
}

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1;

    if (randomNum > 10) {
        return 11;
    }
    else if (randomNum === 1) {
        return 11;
    }
    else {
        return randomNum;
    }
}

function renderGame() {
    let cards = document.getElementById("cards");
    cards.textContent = "Cards: ";

    for (let i = 0; i < cardsArray.length; i++){
        cards.textContent += cardsArray[i] + " ";
    }

    document.getElementById("sum").innerHTML = "Sum: " + sum;

    if (sum < 21) {
        message = "Do you want to draw a new card?";
    }
    else if (sum > 21) {
        message = "Sorry, you have lost the game! Time for a 2nd mortage!";
        isAlive = false;
        reset = true;
        player.chips = 0;
        document.getElementById("nameBalance").textContent = player.name + ": $" + player.chips;
    }
    else if (sum === 21) {
        message = "Nice! You have blackjack! Time to make some bad decisions!";
        blackjack = true;
        reset = true;
        player.chips = 1000000;
        document.getElementById("nameBalance").textContent = player.name + ": $" + player.chips;
    }
    document.getElementById("message").innerHTML = message;
}

function new_card() {
    if (isAlive === true && blackjack === false){
        let newCard = getRandomCard();
        sum += newCard;
        cardsArray.push(newCard);
        renderGame();
    }
}




