document.addEventListener('DOMContentLoaded', () => {
  
  //VARIABLES
  var valueText = document.getElementById("lengthVal");
  var slider = document.getElementById("lengthSlider"); 

  //Initially set the slider and text values on page load
  window.onload = function() {
    console.log(localStorage); 
    valueText.innerHTML = localStorage.getItem("lengthPerFood"); 
    slider.value = localStorage.getItem("lengthPerFood"); 
  };

  //Update storage and text on a change in slider
  slider.addEventListener("input", function() {
    localStorage.setItem("lengthPerFood", slider.value);
    valueText.innerHTML = localStorage.getItem("lengthPerFood"); 
  });

});

