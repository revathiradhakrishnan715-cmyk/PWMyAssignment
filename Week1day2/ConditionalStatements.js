/*Assignment Details:
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
`runTests` with `switch` for test type messages*/

function launchBrowser(str){
    if(str.toLowerCase()==='chrome'){
        return "The Browser is " +str
    }
    else {
        return "The Browser is not Chrome"
    }
}
let browser = 'CHROME';
console.log(launchBrowser(browser));

function runTests(test){
    switch (test.toLowerCase()){
        case "smoke":
            console.log ("The test run is a Smoke")
            break;
        case "sanity":
            console.log ("The test run is a Sanity")
            break;
        case "regression":
            console.log ("The test run is a Regression")
            break;
        default:
            console.log ("The test run is a Default Smoke")
            break;  
    }
}
let testdata = 'tests'
runTests(testdata);
