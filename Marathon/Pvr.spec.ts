import { test, expect } from '@playwright/test';

test ("Pvrmovie", async({page})=>{
// 1. Launch the browser and open https://www.pvrcinemas.com/
    await page.goto("https://www.pvrcinemas.com/")
 // 2. Select the city as “Chennai”     

await page.getByRole('heading',{name:"Chennai"}).click()

// 3. Choose cinema from the available list
await page.click("//span[text()='Cinema']")
await page.locator("//span[text()='Select Cinema']").click()
await page.locator("//span[text()='INOX The Marina Mall, OMR, Chennai']").click()
// 4. Select movie date
await page.locator("//span[contains(text(),'Tomorrow')]").click()
// 5. Choose any available movie
await page.locator("//span[text()='SIRAI']").nth(1).click()

// 6. Select available show time
await page.locator("//span[text()='01:50 PM']").click()
// 7. Click on Book button
await page.locator("//button[@type='submit']").click()
await page.waitForTimeout(2000)
// 8. Click on Accept for Terms & Conditions
await page.locator("//button[text()='Accept']").click()
// 9. Select the available seat
const seat= page.locator("//span[@id='EX.EXECUTIVE|J:4']")
const seatnumber = await seat.innerText()
await seat.click()
// 10. Verify seat information and total ticket amount using assertions
await expect (page.locator(".seat-number")).toContainText(seatnumber)
await expect (page.locator(".grand-prices")).toContainText("70.87")
    
 await page.waitForTimeout(2000)

    // 11. Verify the Title of the page
    const title = await page.title()
    console.log("Title: " +title)
    await expect(page).toHaveTitle(/PVR Cinemas/)
// 12. Proceed to booking
await page.locator("//button[text()='Proceed']").click()
 await page.waitForTimeout(2000)
})