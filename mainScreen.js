document.addEventListener('DOMContentLoaded', () => {
    //Sets the default value for change in length per food if none exists
    //Into the localStorage 
    if (localStorage.getItem("lengthPerFood") == null) {

        localStorage.setItem("lengthPerFood", 1);

    }
});