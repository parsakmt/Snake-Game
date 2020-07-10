/*IMPORTS*/
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, snakeBody, selfCollision} from "./snake.js";
import {update as updateFood, draw as drawFood} from "./food.js";
import { borderCollision, GRID_SIDE_LENGTH } from "./grid.js";


/*VARIABLE DECLARATIONS*/
let lastRenderTime = 0;
const gameBoard = document.getElementById('gameBoard'); 
let gameLost = false; 
let gameWon = false; 



/*FUNCTIONS*/

function main (currentTime) {

    /*Determine if Game is Over*/ 

    //Lose 
    gameLost = isGameLost(); 
    if (gameLost){ 
        if (confirm('Game Over! Press ok to restart!')) {
            window.location.reload(); 
        }
        else 
            return; 
    }
    //Win
    gameWon = isGameWon();
    if (gameWon) {
        if (confirm('CONGRATULATIONS! YOU WIN! Do you want to play again?')) 
            window.location.reload(); 
         else 
            return; 
    }



    /*
    Loops through function as a game loop to constantly update window

    requestAnimationFrame ensures smooth reloads despite calling the 
    function multiple times. It's synchronized with when the broswer will 
    repaint

    currentTime using requestAnimationFrame to measure timestamp of page 
    started loading
    */
    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    //Gamae Update time Depending on snake's speed
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

    console.log(currentTime);
    lastRenderTime = currentTime;

    update()
    draw()
}

window.requestAnimationFrame(main); //Begins program



function update() {
    updateFood(); 
    updateSnake();
}

function draw() {
    //Clears gameboard from unused snake parts when moving 
    //by setting them to nothing
    gameBoard.innerHTML = ''; 


    drawFood(gameBoard);
    drawSnake(gameBoard); 
}

function isGameLost () {
    //Two conditions for losing:
    //1. Self-Collision
    //2. Border-Collision

    return selfCollision() || borderCollision(snakeBody[0]); 
}

function isGameWon () {
    
    if (snakeBody.length >= GRID_SIDE_LENGTH * GRID_SIDE_LENGTH) {
        return true;
    }
    return false; 
}