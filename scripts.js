
let left = 00;
let right = 00;

const scoreLeft = document.getElementById('left');
const scoreRight = document.getElementById('right');

scoreLeft.textContent = `${left}`
scoreRight.textContent = `${right}`

function score1(){
    scoreLeft.textContent = `${left++}`
}

function score2(){
    scoreRight.textContent = `${right++}`
}

function reset(){
    scoreLeft.textContent = left = 00;
    scoreRight.textContent = right = 00;
}
