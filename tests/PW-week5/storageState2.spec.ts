import { test, expect } from '@playwright/test';

test ("StorageState2", async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("[id='username']").fill("Demosalesmanager")
    await page.locator("[id='password']").fill("crmsfa")
    await page.click(".decorativeSubmit")
    await page.click("#label")
//storage state json key value
await page.context().storageState({
    path: "utils/Leaftaps_Login2.json"})
})
