let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackJack = false

// win/lose logic

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
}

// CASH OUT!
console.log(hasBlackJack)
