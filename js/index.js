// Пременные

// const easy = document.querySelector('easy')
// const middle = document.querySelector('middle')
// const hard = document.querySelector('hard')
// const suits = [worms, peaks, bubi, baptize]
// const rank = [6, 7, 8, 9, 10, J, K, Q, A]

// suits.sort(() => Math.random() - 0.5)
// rank.sort(() => Math.random() - 0.5)

document.getElementById('easy').onclick = function (e) {
    e.preventDefault();
    window.location.href = './level/easy_leavel.html';
};
document.getElementById('middle').onclick = function (e) {
    e.preventDefault();
    window.location.href = './level/middle_leavel.html';
};
document.getElementById('hard').onclick = function (e) {
    e.preventDefault();
    window.location.href = './level/hard_leavel.html';
};

// ЛОГИКА ИГРЫ

// let firstCard = null
// let secondCard = null
// let clickable = true

// const cards = document.querySelectorAll('.game-card')

// cards.forEach((card, index) =>
//     card.addEventListener('click', () => {
//         if (clickable == true && !card.classList.contains('successfully')) {
//             card.classList.add('flip')

//             if (firstCard == null) {
//                 firstCard = index
//             } else {
//                 if (index != firstCard) {
//                     secondCard = index
//                     clickable = false
//                 }
//             }

//             if (
//                 firstCard != null &&
//                 secondCard != null &&
//                 firstCard != secondCard
//             ) {
//                 if (
//                     cards[firstCard].firstElementChild.className ===
//                     cards[secondCard].firstElementChild.className
//                 ) {
//                     setTimeout(() => {
//                         cards[firstCard].classList.add('successfully')
//                         cards[secondCard].classList.add('successfully')

//                         firstCard = null
//                         secondCard = null
//                         clickable = true
//                     }, 500)
//                 } else {
//                     setTimeout(() => {
//                         cards[firstCard].classList.remove('flip')
//                         cards[secondCard].classList.remove('flip')

//                         firstCard = null
//                         secondCard = null
//                         clickable = true
//                     }, 500)
//                 }
//             }
//         }
//     }),
// )
