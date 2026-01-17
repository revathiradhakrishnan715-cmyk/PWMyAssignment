import test from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'

test.use({storageState:"Data/LeafTapsLogin.json"})

test("Storage to click lead",async({page})=>{
        await page.goto("http://leaftaps.com/crmsfa/control/main?externalLoginKey=EL416812401730")
        await page.waitForTimeout(2000)
        // console.log("Lead")
        // await page.locator("//a[text()='Leads']").click()
        // await page.locator("//a[text()='Create Lead']").click()
})

// const a:any[]=parse(fs.readFileSync("Data/Leaftap.csv"),{columns:true})

// for(let data of a){

//     test(`Read the value from CSV ${data.TCNo}`,async({page})=>{

//         await page.locator("(//input[@name='companyName'])[2]").fill(data.cName)
//         await page.locator("(//input[@name='firstName'])[3]").fill(data.fName)
//         await page.locator("(//input[@name='lastName'])[3]").fill(data.lName)
//         await page.waitForTimeout(3000)
//     })
// }
