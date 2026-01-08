import { test, expect, chromium } from '@playwright/test';

// test ("framelocator", async({page})=>{

//     await page.goto("https://www.leafground.com/frame.xhtml")
//     await page.waitForTimeout(2000)
//     await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()

// })

test ("frameobject", async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")
    await page.waitForTimeout(2000)
    await page.frameLocator("(//iframe)[3]")
    await page.frame({url:"https://www.leafground.com/framebutton.xhtml"})?.locator("#Click").click()

})