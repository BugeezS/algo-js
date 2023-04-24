let numAX = prompt("Enter X A");
let numAY = prompt("Enter Y A");
let numBX = prompt("Enter X B");
let numBY = prompt("Enter Y B");

// Calculate the distance between two Coordinates. 
// @param {number} x1 Axe x first Coordinates
// @param {number} y1 Axe y First Coordinates
// @param {number} x2 Axe x Second Coordinates
// @param {number} y2 Axe y Second Coordinates
// @return {number} Square root 


function getDistance(x1, y1, x2, y2) {
    let y = x2 - x1;
    let x = y2 - y1;
  
    return Math.sqrt(x * x + y * y);
  }

getDistance(numAX,numAY,numBX,numBY);
console.log(getDistance(numAX,numAY,numBX,numBY));