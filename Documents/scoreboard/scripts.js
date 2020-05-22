
let left = 0;
let right = 0;

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
    scoreLeft.textContent = left = 0;
    scoreRight.textContent = right = 0;
}