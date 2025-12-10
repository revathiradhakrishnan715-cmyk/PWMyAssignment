// For loop and if..if else..else statement

let number = 3;
function numbertype(num){
  
for(let i=-3;i<=num;i++){
if (i>0){ 
console.log("The given number is "+i+" Positive number")
}else if(i<0){
    console.log("The given number is "+i+" Negative number")
}
else{
  console.log("The given number is "+i+" Neutral number")  
}
}
}
console.log(numbertype(number));