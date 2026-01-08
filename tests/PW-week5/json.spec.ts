import loginInFo from "../../datajson/Leaftap.json";
import {test} from "@playwright/test";

for(let data of loginInFo){
        test(`Read the value from CSV ${data.TestCaseID}`,async({page})=>{
    
            await page.goto("http://leaftaps.com/opentaps/control/main")
            await page.locator("#username").fill(data.Username)
            await page.locator("#password").fill(data.password)
            await page.locator(".decorativeSubmit").click()
        })
}