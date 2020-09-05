/*IMPORTS*/
import { direction } from "./input.js";


/*VARIABLE DECLARATIONS*/
export let SNAKE_SPEED = 12; 
export let SEGMENTS_PER_FOOD = localStorage.getItem("lengthPerFood") == null ? 1 : localStorage.getItem("lengthPerFood"); 
export let snakeBody = [{ x: 11, y: 11 }]; 
export let newTailSegment = { x: snakeBody[0].x, y: snakeBody[0].y }



/*FUNCTIONS*/ 

export function update() {

    newTailSegment = {
        x: snakeBody[0].x,
        y: snakeBody[0].y
    }

    //Copy array segments except last value to move with the head
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        //... is a spread operator
        //... copies the array, doesn't reference it 
        snakeBody[i + 1] = { ...snakeBody[i] } 
    }

    snakeBody[0].x += direction.x; 
    snakeBody[0].y += direction.y; 
}

export function draw(gameBoard) {
    for (let i = 0; i < snakeBody.length; i++) {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = snakeBody[i].y; 
        snakeElement.style.gridColumnStart = snakeBody[i].x; 
        snakeElement.classList.add('snake'); 
        gameBoard.appendChild(snakeElement);   
    }
}

export function addNewSegmenets() {
    for (let i = 0; i < SEGMENTS_PER_FOOD; i++) 
            snakeBody.push(newTailSegment); 
}

//Detect if a self-collision occurs
export function selfCollision() { 
    for (let i = 1; i < snakeBody.length; i++) 
        if (snakeBody[0].x == snakeBody[i].x && snakeBody[0].y == snakeBody[i].y)
            return true; 

    return false; 
}
