let MinNum = prompt("Add a min number");
let Num = prompt("Add a number");
let MaxNum = prompt("Add a max number");

if((Num<MaxNum)&&(Num>MinNum)){
    alert("Your number is " + Num);
}else if(MinNum>MaxNum){
    alert("Min higher than Max")
}

