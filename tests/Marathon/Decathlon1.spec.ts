import { test, expect, chromium } from '@playwright/test';

test ("Decathlon", async({page})=>{
    await page.goto("https://www.decathlon.in/search?query=shoes")
    await page.waitForTimeout(2000)
   // await expect(page).toHaveURL(/https://www.decathlon.in/search?query=shoes/)
    await page.locator("//span[contains(text(),'Sport shoes')]").click()
    await page.locator("//span[contains(text(),'Running')]").click()
    await page.locator("//span[contains(text(),'Uk 10.5 ')]").click()
    await page.locator("//span[contains(text(),'Most Relevant')]").click()
    await page.locator("//a[contains(text(),'Price: Low to High')]").click()

await page.waitForTimeout(2000)
   await page.locator("(//div[@class='bg-grey-50']/img)[1]").click()
   await page.locator("//div[contains(text(),'UK 10.5')]").click()
   await page.locator("//span[contains(text(),'ADD TO CART')]").click()
    const toast = page.locator("//h3[text()='Product added to cart']");
    console.log(toast)


})