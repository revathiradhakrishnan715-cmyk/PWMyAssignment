import test,{chromium, firefox, webkit}  from "@playwright/test";

test ("Launch The Browser", async()=>{
    let browser= await chromium.launch({channel:"chrome",headless:false})

    let Context= await browser.newContext()

    let page= await Context.newPage()

    await page.goto("https://www.facebook.com")
    await page.waitForTimeout(4000)

})