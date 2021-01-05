


let grid = document.querySelector('.grid');
let clearButton = document.querySelector('.clear');
let smallButton = document.querySelector('.small');
let mediumButton = document.querySelector('.medium');
let largeButton = document.querySelector('.large');
let eraserButton = document.querySelector('.eraser');
let blackButton = document.querySelector('.black');
let redButton = document.querySelector('.red');
let blueButton = document.querySelector('.blue');
let greenButton = document.querySelector('.green');
let yellowButton = document.querySelector('.yellow');
let orangeButton = document.querySelector('.orange');
let whiteButton = document.querySelector('.white')
let color = "black";




// create grid function
function gridCreate(num = 16){
    grid.style.setProperty('--grid-rows', num);
        grid.style.setProperty('--grid-columns', num);

    for (let i = 0; i <= (num*num); i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-cell");
        grid.insertAdjacentElement('beforeend', cell)

    }
    let gridPixels = grid.querySelectorAll('.grid-cell')
    
    gridPixels.forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = color;
        })
      });
}

let gridPixels = grid.querySelectorAll('.grid-cell');

// call grid function on page load

window.onload = function() {
    gridCreate();
  };


  //reset grid


function reset(elementID) { 
      
    while(grid.firstChild) { 
        grid.removeChild(grid.firstChild); 
    } 
    gridCreate();
};

// clear button
clearButton.addEventListener('click', function(e){
    reset();
});

// small button
smallButton.addEventListener('click', function(e){
    reset();
    gridCreate(64);
    color = "black";
});

// medium button
mediumButton.addEventListener('click', function(e){
    reset();
    gridCreate(32);
    color = "black";
});

// large button
largeButton.addEventListener('click', function(e){
    reset();
    gridCreate(16);
    color = "black";
});

//eraser


eraserButton.addEventListener('click', function(e){
   color = '#f5f5f5';
    
});

// colors
blackButton.addEventListener('click', function(e){
    color = "black";
     
 });

 redButton.addEventListener('click', function(e){
    color = "red";
     
 });

 blueButton.addEventListener('click', function(e){
    color = "blue";
     
 });

 yellowButton.addEventListener('click', function(e){
    color = "yellow";
     
 });

 greenButton.addEventListener('click', function(e){
    color = "green";
     
 });

 orangeButton.addEventListener('click', function(e){
    color = "orange";
     
 });

 whiteButton.addEventListener('click', function(e){
    color = "white";
     
 });







 



        





  
