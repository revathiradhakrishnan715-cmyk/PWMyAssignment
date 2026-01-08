import {test} from "@playwright/test";
import {parse} from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const a:any[]=parse(fs.readFileSync("datanew/Leaftap.csv"),{columns:true})

for(let data of a){

    test(`Read the value from CSV ${data.TestCaseID}`,async({page})=>{

        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill(data.Username)
        await page.locator("#password").fill(data.password)
        await page.locator(".decorativeSubmit").click()
    })
}