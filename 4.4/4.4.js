let array = ["Abel", "Alexandra","Anthony","Benjamin","Bruno","Delphine","Emilien","Ethan","Ismaël","Jodie","Julien","Louka","Loïc","Luciano","Marine","Nikko","Noa","Steve","Sylvain","Willy"];
let list = [];
let number = prompt("Enter a number");

function pickLearner(inputAr, n){
    if(n === 0){
        alert("Wrong number");
    }else if (n > inputAr.length){
        alert("Wrong number");
    }else{
    //     for(i=0 ; i < n ; i++){
    //         list.push(inputAr[Math.floor(Math.random() * inputAr.lenght)]);
    //     }
    //     return list;    
    // }
    while(n > 0){
        list.push(inputAr[Math.floor(Math.random() * inputAr.length)]);
        n -= 1;
    }
    return list;
}
}
pickLearner (array,number);
console.log(list);