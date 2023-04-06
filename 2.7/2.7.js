let n = prompt("Enter a number ");
let t = 0;
if(n == 0 ){
    alert("Error")
}else if (n>0){
    for(i=0 ; i<n ; i++){
        a = Number(prompt("Enter a number"));
        t += a ;
    }

}
document.write(t)
