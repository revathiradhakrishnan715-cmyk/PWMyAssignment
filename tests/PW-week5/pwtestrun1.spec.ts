import test from '@playwright/test'

test.skip("Test.Skip1",async({page})=>{
    await page.goto("https://www.facebook.com")
})
test("Test1",async({page})=>{
    await page.goto("https://www.google.com")
})

test.fail("test.fail1",async({page})=>{
    await page.goto("https://www.amazon.in")
})

test.fixme("test.fixme1",async({page})=>{
    await page.goto("https://login.salesforce.com/")
        await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
        await page.locator("#password").fill("TestLeaf@2025")
        await page.locator("#Login").click()
})

test("test.info1",async({page})=>{

    test.info().annotations.push({type:'Smoke Testing',description:'Testing Login Function'},
        {type:'Author',description:'Test run'})

    await page.goto("https://login.salesforce.com/")
        await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
        await page.locator("#password").fill("TestLeaf@2025")
        await page.locator("#Login").click()
})

// test.only("test.only",async({page})=>{
//     await page.goto("https://www.amazon.in")
// })