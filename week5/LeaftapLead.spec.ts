import loginInfo from "../../Data/Leaftaplogin.json"
import  {test} from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'

const csvFile = parse(fs.readFileSync("Data/Leaftap.csv"),{columns:true})


for(let data of loginInfo){

test(`Read the Value from JSON ${data.Tc_No}`,async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    console.log(data.UserName)

 await page.locator("#username").fill(data.UserName)
await page.locator("#password").fill(data.Password)
await page.locator(".decorativeSubmit").click()
await page.locator("//a[contains(text(),'CRM')]").click()

})

}

const a:any[]=parse(fs.readFileSync("Data/Leaftap.csv"),{columns:true})

for(let cv of a){

    test(`Read the value from CSV ${cv.TCNo}`,async({page})=>{

        await page.locator("(//input[@name='companyName'])[2]").fill(cv.cName)
        await page.locator("(//input[@name='firstName'])[3]").fill(cv.fName)
        await page.locator("(//input[@name='lastName'])[3]").fill(cv.lName)
        await page.waitForTimeout(3000)
    })
}
