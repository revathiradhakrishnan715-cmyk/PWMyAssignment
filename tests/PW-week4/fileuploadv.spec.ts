import { test, expect } from '@playwright/test';
import { promiseHooks } from 'v8';
test.use({storageState:"utils/Salesforce_Login.json"})

test ("Fileupload salesforce tc1", async({page,context})=>{
await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
await page.waitForTimeout(3000)
await page.getByTitle("App Launcher").click()
await page.locator("//button[text()='View All']").click()
await page.waitForTimeout(2000)
await page.getByPlaceholder("Search apps or items...").fill("Account")
await page.locator("(//p[@class='slds-truncate'])[2]").click()
await page.waitForTimeout(2000)
await page.locator("(//div[text()='New'])[1]").click()
await page.waitForTimeout(2000)
await page.locator("//input[@name='Name']").fill("Deena")
await page.locator("//label[text()='Type']/parent::span//following-sibling::div[1]//button").click()
await page.locator("(//span[text()='Prospect'])[1]").click()
//await page.waitForTimeout(2000)
await page.locator("//label[text()='Industry']/parent::span//following-sibling::div[1]//button").click()
await page.locator("(//span[text()='Banking'])[1]").click()
await page.locator("//button[@name='SaveEdit']").click()
await page.waitForTimeout(5000)

// await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
// await page.waitForTimeout(5000)

const upload =page.locator("//a[@title='Upload Files']/div")

const [filechooser] = await Promise.all([
page.waitForEvent('filechooser'),
upload.click(),
])


//const upload = page.locator("//div[@title='Upload Files']")
// await page.locator("//a[@title='Upload Files']/div").click()
// const upload =await filechoose
await filechooser.setFiles("Data/Test file.pdf");

//await upload1.setInputFiles("Data/Test file.pdf")
await page.waitForTimeout(5000)
})