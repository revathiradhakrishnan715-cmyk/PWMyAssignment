import test from '@playwright/test'

test.describe("Test Describe",()=>{
        
    test.describe.configure({mode:'default'})

    test("Login TestCase 1",async({page})=>{
        test.info().annotations.push({type:'Test Describe',description:'default'})

    await page.goto("https://login.salesforce.com/")
        await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
        await page.locator("#password").fill("TestLeaf@2025")
        await page.locator("#Login").click()
    })

    test("login TestCase 2",async({page})=>{
        test.info().annotations.push({type:'Test Describe',description:'default'})

     await page.goto("https://login.salesforce.com/")
        await page.locator("#usernam").fill("dilipkumar.rajendran@testleaf.com")
        await page.locator("#password").fill("TestLeaf@2025")
        await page.locator("#Login").click()
    })

    test("Login TestCase 3",async({page})=>{
        test.info().annotations.push({type:'Test Describe',description:'default'})

    await page.goto("https://login.salesforce.com/")
        await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
        await page.locator("#password").fill("TestLeaf@2025")
        await page.locator("#Login").click()
    })



})