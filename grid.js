//VARIABLE DECLARATIONS
export const GRID_SIDE_LENGTH = 21;  //Square grid, ROWS == COLUMNS

//HELPER FUNCTIONS
export function getRandomGridPosition () {
    return 1 + Math.floor (1 + Math.random() * GRID_SIDE_LENGTH - 1); 
}

//Detect if a border-collision occurs
export function borderCollision (snakePosition) {
    if( !(snakePosition.x >= 1 && snakePosition.y >= 1 && snakePosition.x <= GRID_SIDE_LENGTH && snakePosition.y <= GRID_SIDE_LENGTH) ) {
        return true
    }
    return false; 
}