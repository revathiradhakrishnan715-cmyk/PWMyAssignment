// - Load the URL (https://the-internet.herokuapp.com/upload)
// - Load the URL (https://the-internet.herokuapp.com/download)
import { test, expect } from '@playwright/test';
import { title } from 'process';
import fs from 'fs';

test ("upload file tc1", async({page})=>{
await page.goto("https://the-internet.herokuapp.com/upload")
const file =page.locator("(//input[@type='file'])[1]")
await file.setInputFiles("Data/Test file.pdf")
await page.waitForTimeout(2000)
await page.locator("(//input[@type='submit'])[1]").click()
await page.waitForTimeout(2000)

// const message= await page.title()
// console.log(message)


// Assert success message
  await expect(page.locator("//h3[text()='File Uploaded!']")).toHaveText('File Uploaded!');

  // Assert uploaded file name
  await expect(page.locator("//div[@id='uploaded-files']")).toHaveText('Test file.pdf');

// const actualTitle = page.locator("//h3[text()='File Uploaded!']")
// const expectTitle="File Uploaded!"
// expect(expectTitle).toEqual(actualTitle)
// console.log(actualTitle)

// const title=await expect(page.locator("//h3[text()='File Uploaded!']")).toHaveText('File Uploaded!');
// console.log("Message" +title)
})

test ("Download file tc2", async({page, context})=>{
await page.goto("https://the-internet.herokuapp.com/download")
await page.waitForTimeout(2000)
const assign =page.waitForEvent('download')
await page.locator("//a[text()='file.json']").click()
const downloaded =await assign
await downloaded.saveAs("Data/"+downloaded.suggestedFilename())
await page.waitForTimeout(3000)
expect(fs.existsSync("Data/"+downloaded.suggestedFilename())).toBeTruthy();
})