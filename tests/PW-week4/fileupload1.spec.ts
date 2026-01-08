import { test, expect } from '@playwright/test';

test ("File upload salesforce", async({page})=>{
await page.goto("https://login.salesforce.com/")
await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForTimeout(4000)
await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
await page.waitForTimeout(4000)
await page.getByTitle("App Launcher").click()
await page.locator("//button[text()='View All']").click()
await page.waitForTimeout(2000)
await page.getByPlaceholder("Search apps or items...").fill("Account")
await page.locator("(//p[@class='slds-truncate'])[2]").click()
await page.waitForTimeout(2000)
await page.locator("(//div[text()='New'])[1]").click()
await page.waitForTimeout(2000)
await page.locator("//input[@name='Name']").fill("Vishva")
await page.locator("(//button[@role='combobox'])[2]").click()
await page.locator("(//span[text()='Prospect'])[1]").click()
//await page.waitForTimeout(2000)
await page.locator("(//button[@role='combobox'])[3]").click()
await page.locator("(//span[text()='Banking'])[1]").click()
await page.locator("//button[@name='SaveEdit']").click()
const toastMessage = page.locator("//span[contains(@class,'toastMessage')]")
console.log("Message: "+toastMessage);
await page.waitForTimeout(2000)

await page.keyboard.press('End')
// await page.evaluate(()=> window.scrollTo(0,document.body.scrollHeight))
// await page.waitForTimeout(5000)
const choose=  page.locator("//*[text()='Upload Files']")

//choose.click()
const [filechooser] = await Promise.all([
page.waitForEvent('filechooser'),
choose.click(),
])
await filechooser.setFiles("Data/Test file.pdf");
await page.locator("//span[text()='Done']").click()
//await choose.setInputFiles("Data/Test file.pdf")

//await page.evaluate(()=>{window.scrollBy(0,500)})
//await page.locator("a[@title='Show one more action']").click()
//await page.locator("//div[@title='Upload Files']").click()
//const upload =await choose


//const upload = page.locator("//div[@title='Upload Files']")
// await page.locator("//a[@title='Upload Files']/div").click()
// const upload =await filechoose


const toastMessage1 =  page.locator("//span[contains(@class,'toastMessage')]")
await expect (toastMessage1).toBeVisible()
await expect(toastMessage1).toContainText("1 file was added to the Account.")
console.log(toastMessage1);
await page.waitForTimeout(5000)

})