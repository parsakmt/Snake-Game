import { snakeBody } from "./snake.js";

export let direction = {x: 0, y: 0}; 


document.addEventListener('keydown', function(event){

    /* Snake is unable to move in reverse if it has multiple segments */

    //Left Arrow Key
    if (event.keyCode == 37 && (direction.x != 1 || snakeBody.length == 1)) {
        direction = {x: -1, y: 0};
    }

    //Up Arrow Key
    else if (event.keyCode == 38 && (direction.y != 1 || snakeBody.length == 1)) {
        direction = {x: 0, y: -1};
    }

    //Right Arrow Key
    else if (event.keyCode == 39 && (direction.x != -1 || snakeBody.length == 1)) {
        direction = {x: 1, y: 0};
    }

    //Down Arrow Key
    else if (event.keyCode == 40 && (direction.y != -1 || snakeBody.length == 1)) {
        direction = {x: 0, y: 1};
    }
});