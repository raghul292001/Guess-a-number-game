'use strict';

//secretNumber
let secretNumber = Math.trunc(Math.random()*20+1);
console.log(secretNumber);
//score 
let score =20;
//highscore
let highScore =0;
//guessNumber 
document.querySelector('.check').addEventListener('click',function(){
    const guessNumber=Number( document.querySelector('.guess').value);
    console.log(typeof guessNumber);
    //if there is no number
    if(!guessNumber){
        document.querySelector('.message').textContent="⛔No Number";
   //correct number
    }else if(guessNumber==secretNumber){
        document.querySelector('.message').textContent="Correct Number💯";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor ='#34eb46';
        document.querySelector('.number').style.width ='30rem';
        if(score > highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
   //if the number is too high than secretnumber
    }else if(guessNumber>secretNumber){
        document.querySelector('.message').textContent="Too High ⬆️";
        if(score>0){
         score--;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.score').textContent = "You Lost The Game 😒";
            document.querySelector('body').style.backgroundColor ='#fa0505';
        }
    //if the number is too low than secretnumber
    }else if(guessNumber<secretNumber){
        document.querySelector('.message').textContent="Too Low⬇️";
        if(score>0){
            score--;
           document.querySelector('.score').textContent = score;
           }else{
               document.querySelector('.score').textContent = "You Lost The Game 😒";
               document.querySelector('body').style.backgroundColor ='#fa0505';
           }
    }
});

//Again button functionality

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber = Math.trunc(Math.random()*20+1);
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width ='15rem';
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    console.log(secretNumber);
})