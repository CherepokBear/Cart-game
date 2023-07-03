// const easy = document.querySelector('easy');
// const middle = document.querySelector('middle');
// const hard = document.querySelector('hard');
// const suits = [worms, peaks, bubi, baptize];
// const rank = [6, 7, 8, 9, 10, J, K, Q, A];

// suits.sort(() => Math.random() - 0.5);
// rank.sort(() => Math.random() - 0.5);

let image = document.getElementById('img');
let images = ['96e9053c1d85464dd24d89c313c0e184--nature-animals-wild-life.jpg', '1566261550_art-edinorog-119.jpg'];
let a = 0;
document.querySelector('.back_side').style.display = 'none';
function SetImage() {
    if (a == 0) {
        image.setAttribute('src', images[0]);
        a = 1;
    } else {
        document.querySelector('.back_side').style.display = '';
        image.setAttribute('src', images[1]);
        a = 0;
    }
};
setInterval(SetImage, 1000);


image.onclick = function () {
    alert('Спасибо');
};