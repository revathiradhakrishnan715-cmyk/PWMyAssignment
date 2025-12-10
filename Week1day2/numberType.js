/* Assignment Details:
Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
corresponding string indicating the type.*/

let numbertype = 0;
function getnumberType(number){
    if(number>0){
        return "the given number " +number+ " is greater than 0, it is a positive number"
    }
    else if(number<0){
        return "the given number " +number+ " is Less than 0, it is a Negative number"
    }
     else {
      return "the given number " +number+ " is neutral"
    }  
     }   
     console.log(getnumberType(numbertype));
    

