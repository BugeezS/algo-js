// Create a random number between 0 and 10
// @param {number} chiffre Number 10 
// @return {number} Random number between 0 and 10

function rand10 (chiffre){
    return Math.floor(Math.random()*chiffre)
}
document.write(rand10(10));