//IMPORTS
import { snakeBody, addNewSegmenets } from "./snake.js";
import {getRandomGridPosition} from "./grid.js"; 

//VARIABLE DECLARATIONS
export let food = {x: getRandomGridPosition(), y: getRandomGridPosition()}; 


//UPDATE FOOD FUNCTION
export function update() {
    eatFood(); 
    newFoodPosition(); 
}

//DRAWING FOOD FUNCTION
export function draw(gameBoard) {

        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = food.y; 
        foodElement.style.gridColumnStart = food.x; 
        foodElement.classList.add('food'); 
        gameBoard.appendChild(foodElement); 
}





//HELPER FUNCTIONS

function eatFood() {
    if (food.x == snakeBody[0].x && food.y == snakeBody[0].y)
        addNewSegmenets(); 
}

function newFoodPosition () {
    //Prohibits food from overlapping snake
    for (let i = 0; i < snakeBody.length; i++) {
        if (food.x == snakeBody[i].x && food.y == snakeBody[i].y) {
            //Random food assignment
            food = {
                x: getRandomGridPosition(), 
                y: getRandomGridPosition()
            };
        }
    }
}