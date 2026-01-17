import { test, expect } from '@playwright/test';

test ("StorageState2", async({page})=>{
await page.goto("https://login.salesforce.com/")
    await page.waitForTimeout(2000)
 await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel("Password").fill("TestLeaf@2025")
    await page.waitForTimeout(3000)
    await page.click("//input[@id='Login']")
    await page.waitForTimeout(3000)
await page.context().storageState({
    path: "Data/Salesforce_Login.json"})
})