let array = [];
let ask = prompt("Enter number")

function rand10 (chiffre){
    return Math.floor(Math.random()*chiffre)
}

// Enter a number who decide how many time a rand10 will be .
// @param {number} chiffre prompt number
// @return {number} show the number in the array 

function mulitRand(n){
    for(i=0 ; i< n ; i ++){
        array.push(rand10(10))
    }
    return array;
}
console.log(mulitRand(ask));

