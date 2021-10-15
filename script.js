'use strict';

//Initializing values
let highScore = 0;
let currScore = 20;
let gameOver = false;
let num = Math.trunc(Math.random()*20 +1);

//on click, checks guess number to random number
document.querySelector('.check').addEventListener('click', function(){
    let checkNum = document.querySelector('.guess').value;
    if(currScore > 1 && !gameOver){
        if(!checkNum){
            document.querySelector('.message').textContent = 'Enter a number...';
        }else if(checkNum > num){ //checks if number is too high
            currScore--;
            document.querySelector('.message').textContent = 'Number too HIGH';
            document.querySelector('.score').textContent = currScore;
        }else if(checkNum < num){ //checks if number is too LOW
            currScore--;
            document.querySelector('.message').textContent = 'Number too LOW';
            document.querySelector('.score').textContent = currScore;
        }else { //Correct number guessed
            document.querySelector('.message').textContent = 'You WIN!';
            document.querySelector('.number').textContent = num;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if(currScore > highScore){
                highScore = Number(currScore); //required to update to number
                document.querySelector('.highscore').textContent = currScore;
                
            }
            gameOver = true;    //sets end of game parameter
    
        }
    }else if(currScore=1 && !gameOver){
        document.querySelector('.message').textContent = 'Game Over...';
        document.querySelector('.score').textContent = '0';
        document.querySelector('body').style.backgroundColor = 'rgb(124, 32, 32)';
        gameOver = true;    //sets end of game parameter
    }
});

//listens for click to restart/reinitialize game
document.querySelector('.again').addEventListener('click', function(){
    gameOver = false;   //resets game parameter to false
    document.querySelector('.message').textContent = "Starting new game...";
    document.querySelector('body').style.backgroundColor = 'rgb(39, 61, 61)';
    currScore = 20;
    document.querySelector('.score').textContent = currScore;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    num = Math.trunc(Math.random()*20 +1);  //new guessing number is created
});