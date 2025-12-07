/*Assignment Details: 
Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave 
differently when printed*/

const browserversion = "Chrome";

function getBrowserVersion(){

  if (browserversion == "Chrome") {

    let browserversion = "Chrome v130.0.0";
      // var browserversion = "Chrome v130.0.0";
    console.log("Browser version is (inside):", browserversion);
  }

console.log("Browser version is(ouside):" +browserversion);
//browserversion = "edge" //TypeError: Assignment to constant variable.
}
getBrowserVersion();
console.log("Browser version is global:" +browserversion);