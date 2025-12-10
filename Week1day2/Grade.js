function printgrade (score){

    if (typeof score !== "number" ) {
    return "Invalid input";
    //console.log("Invalid input");
  }

    switch(true){
    case score >= 90 && score <=100: 
    return "A";
    case score >=80 && score < 90:
    return "B";
    case score >=60 && score < 80:
    return "C";
    case score >=40 && score < 60:
    return "D";
    default:
    return "F";

    }
}
let studentscore ="mar";
console.log("The Student Score is: "+studentscore+" and the Grade is: "+ printgrade(studentscore))