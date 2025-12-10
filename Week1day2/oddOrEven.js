/*Assignment Details:
Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the
number is odd and `"Even"` if the number is even.*/

let num = 10;
function isOddOrEven(n){
    //let number = 99;
for(let i=0;i<=n;i++){
if (i%2===0){ 
console.log("The given number is "+i+" Even")
}else{
    console.log("The given number is "+i+" Odd")
}
}
}
console.log(isOddOrEven(num));