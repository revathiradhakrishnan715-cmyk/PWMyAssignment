import { test, expect, chromium } from '@playwright/test';

test ("Decathlon", async({page})=>{
    await page.goto("https://www.decathlon.in/")
    await page.waitForTimeout(2000)
    await expect(page).toHaveURL('https://www.decathlon.in/')
    
    //await expect(page).toHaveTitle(/Decathlon/)
    
    const searchBox = page.locator("//span[@class='!mr-1']").first();     
    await expect(searchBox).toBeEnabled();     
    await searchBox.click();     
    const searchBoxField = page.getByPlaceholder('Search For 60+ Sports and 6000+ Products');     
    await searchBoxField.click();     
    await searchBoxField.fill("Shoes");     
    await searchBoxField.press("Enter");
    await page.waitForTimeout(2000)
    await page.locator("//span[contains(text(),'Sport shoes')]").click()
    await page.locator("//span[contains(text(),'Running')]").click()
    await page.locator("//span[contains(text(),'Uk 10.5 ')]").click()
    await page.locator("//span[contains(text(),'Men')]").click()
    await page.locator("//span[contains(text(),'Most Relevant')]").click()
    await page.locator("//a[contains(text(),'Price: Low to High')]").click()
    await page.waitForTimeout(2000)
   await page.locator("(//div[@class='bg-grey-50']/img)[1]").click()
   await page.locator("//div[contains(text(),'UK 10.5 - EU 45')]").click()
   await page.locator("//span[contains(text(),'ADD TO CART')]").click()
   await page.waitForTimeout(3000)
    const toast = page.locator("//h3[text()='Product added to cart']");
    console.log(toast)



})