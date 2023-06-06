// Get the canvas element
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// Set canvas size to full window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables to store previous and current touch positions
var previousX, previousY, currentX, currentY;

// Set up event listeners
canvas.addEventListener('touchstart', handleStart, false);
canvas.addEventListener('touchmove', handleMove, false);
canvas.addEventListener('touchend', handleEnd, false);

function handleStart(event) {
    // Get the touch coordinates
    previousX = currentX = event.touches[0].clientX - canvas.offsetLeft;
    previousY = currentY = event.touches[0].clientY - canvas.offsetTop;
   
    // Begin the path
    context.beginPath();
    context.moveTo(previousX, previousY);
   
    event.preventDefault();
}

function handleMove(event) {
    // Update the touch coordinates
    currentX = event.touches[0].clientX - canvas.offsetLeft;
    currentY = event.touches[0].clientY - canvas.offsetTop;
   
    // Draw a line from previous position to the current position
    context.lineTo(currentX, currentY);
    context.stroke();
   
    // Update previous position
    previousX = currentX;
    previousY = currentY;
   
    event.preventDefault();
}

function handleEnd(event) {
    // End the path
    context.closePath();
   
    event.preventDefault();
}