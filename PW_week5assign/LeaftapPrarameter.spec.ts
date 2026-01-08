import { test, expect } from '@playwright/test';
test.use({storageState:"utils/Leaftaps_Login.json"})

test ("StorageState Contacts tc2", async({page})=>{
await page.goto("http://leaftaps.com/crmsfa/control/main?externalLoginKey=EL416812401730")
await page.waitForTimeout(2000)
await page.click("//a[text()='Create Contact']")
await page.locator("//input[@id='firstNameField']").fill("Aadhiraiyan")
await page.waitForTimeout(3000)

})

test ("StorageState Accounts tc3", async({page})=>{
await page.goto("http://leaftaps.com/crmsfa/control/main?externalLoginKey=EL416812401730")
await page.waitForTimeout(2000)
await page.click("//a[text()='Create Account']")
await page.locator("//input[@id='accountName']").fill("Vikaash")
await page.waitForTimeout(3000)

})