import { test, expect } from '@playwright/test';

test ("StorageStatev", async({page})=>{
await page.goto("https://login.salesforce.com/")
await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
//storage state json key value
await page.context().storageState({
    path: "utils/Salesforce_Login.json"})
})