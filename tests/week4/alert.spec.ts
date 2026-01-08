import { test, expect, chromium } from '@playwright/test';

test.only ("alert page.once", async({page})=>{

page.once("dialog",alertType=>{

    const type =alertType.type()
    console.log(type)

    console.log(alertType.message())
    if(type==='alert'){
        alertType.accept()
    }
    else if(type ==='confirm'){
        alertType.accept()
    }
   else (type === 'prompt');{
    alertType.accept("Vikaash")
   }
    
    })

    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.waitForTimeout(2000)
    await page.locator("(//span[text()='Show'])[5]").click()
})