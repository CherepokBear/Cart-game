// const suits = [worms, peaks, bubi, baptize]
// const rank = [6, 7, 8, 9, 10, J, K, Q, A]
import { Card } from "./card.js";
import { StartTIME } from "./stopwatch.js";
import { ClearСlock } from "./stopwatch.js";

export function newGame(container, cardsCount) {
    //создать поле
    let cardsNumberArray = [],
        cardsArray = [],
        firstCard = null,
        secondCard = null

    for (let i = 1; i <= cardsCount / 2; i++) {
        cardsNumberArray.push(i);
        cardsNumberArray.push(i);
    }

    cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);

    for (const cardNumber of cardsNumberArray) {
        cardsArray.push(new Card(container, cardNumber, flip))
    }

    //логика игры
    function flip(card) {

        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number != secondCard.number) {
                firstCard.open = false
                secondCard.open = false
                firstCard = null
                secondCard = null
            }
        }

        if (firstCard == null) {
            firstCard = card
        } else {
            if (secondCard == null) {
                secondCard = card
            }
        }

        if (firstCard !== null && secondCard !== null) {
            if (firstCard.number == secondCard.number) {
                firstCard.success = true
                secondCard.success = true
                firstCard = null
                secondCard = null
            }
        }

        //нашел все карты
        if (document.querySelectorAll('.card.success').length == cardsNumberArray.length) {
            //Сброс
            alert('Победа')
            container.innerHTML = ''
            cardsNumberArray = []
            cardsArray = []
            firstCard = null
            secondCard = null

            newGame(container, cardsCount)
        }

    }

}

newGame(document.getElementById('game'), 6)

