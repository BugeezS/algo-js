let Mercury = 0.2408467 * 31557600;
let Venus = 0.61519726 * 31557600;
let Earth =1 * 31557600;
let Mars = 1.8808158 * 31557600;
let Jupiter = 11.862615 * 31557600;




function spaceAge (sec,planet){
const rep = sec / planet ;
return rep;
}

console.log(spaceAge(365.25 * 24 * 60 * 60, Mercury)); // returns 1
