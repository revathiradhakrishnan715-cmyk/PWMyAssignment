// Assignment: 3 Create a new Account
// 1. Navigate to the url https://login.salesforce.com/
// 2. Enter username using getByLabel
// 3. Enter password using getByLabel
// 4. Click Login
// 5. Verify the title and url of the page using appropriate assertions
// 6. Click App Launcher using the class locator
// 7. Click View All using getByText
// 8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
// 9. Click Service using index based XPath
// 10. Click Accounts using attribute based CSS selector
// 11. Click New using getByRole
// 12. Enter Account name using attribute based CSS selector
// 13. Click Save button using XPath
// 14. Verify the toast message displayed

import { test, expect } from '@playwright/test';

test ("NewAccount", async({page})=>{

await page.goto("https://login.salesforce.com/")
    await page.waitForTimeout(2000)
    await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel("Password").fill("TestLeaf@2025")
    await page.waitForTimeout(3000)
    await page.click("//input[@id='Login']")
    //const title = await page.title()
    //console.log("Title: " +title)
    await expect(page).toHaveURL(/testleaf.lightning.force.com/); 
     await page.waitForTimeout(2000)
    await expect(page).toHaveTitle(/Salesforce/)
    await page.locator(".slds-icon-waffle").click()
    await page.getByText(/View All/).and(page.locator("button")).click()
//Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
    await page.getByPlaceholder("Search apps or items...").fill("Service")
    await page.waitForTimeout(2000)
//Click Service using index based XPath
    await page.locator("(//p[@class='slds-truncate'])[1]").click()
//Click Accounts using attribute based CSS selector
    //await page.getByAltText('false').click();
    await page.click("//span[text()='Accounts']")
    //await page.waitForTimeout(2000)
    //await page.getByText('', { name: 'New' }).click();
    await page.getByText( 'New').click();
    //await page.waitForTimeout(2000)
    await page.locator("//input[@name='Name']").fill("Vikaash")
    await page.click("//button[@name='SaveEdit']")
    await page.waitForTimeout(2000)
    //await expect(page).toHaveTitle(/Salesforce/)

})