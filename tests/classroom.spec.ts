// ClassRoom:
// load the url : https://www.amazon.in/
// 1. Locate the search box using attribute based xpath -> Iphone
// 2. Click on storage -> 512 GB and above
// 3. Click on add to cart button


import test,{chromium, firefox, webkit}  from "@playwright/test";

test ("amazon", async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(3000)
    await page.locator("//input[@id='twotabsearchtextbox']").fill("Iphone")
    await page.click("//input[contains(@id,'nav-search')]")
    await page.click("//span[text()='Iphone 16']")
    await page.click("//span[text()='512 GB & above']")
    await page.click("(//button[text()='Add to cart'])[1]")
    await page.waitForTimeout(3000)

})