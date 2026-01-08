import test,{chromium, firefox, webkit}  from "@playwright/test";

test ("Login Salesforce", async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.waitForTimeout(6000)
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.waitForTimeout(3000)
    await page.locator("#Login").click()
    await page.waitForTimeout(13000)
    let title = await page.title()
    console.log(title)
    await page.locator(".slds-icon-waffle").click()
    await page.waitForTimeout(3000)

})