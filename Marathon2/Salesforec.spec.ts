// 1. Step: Launch the browser (Chrome / Edge / Firefox / Safari).
// 2. Step: Load the specified URL (https://login.salesforce.com/).
// 3. Step: Enter the Username, Password and click on the Login button.


import { test, expect } from '@playwright/test';

test.use({storageState:"Data/Salesforce_Login.json"})

test ("NewAccount", async({page})=>{

// await page.goto("https://login.salesforce.com/")
//     await page.waitForTimeout(2000)
//     await page.getByLabel("Username").fill("dilipkumar.rajendran@testleaf.com")
//     await page.getByLabel("Password").fill("TestLeaf@2025")
//     await page.waitForTimeout(3000)
//     await page.click("//input[@id='Login']")
    //const title = await page.title()
    //console.log("Title: " +title)

// 4. Step: Click on the App Launcher toggle button.
await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
await page.waitForTimeout(2000)
await page.getByTitle("App Launcher").click()
// 5. Step: Click on the View All link.
await page.locator("//button[text()='View All']").click()
await page.waitForTimeout(2000)
// 6. Step: Type ‘Marketing’ in the search box and click on the Marketing link.
// 7. Step: Navigate to the Leads tab from the Marketing dashboard.
await page.getByPlaceholder("Search apps or items...").fill("Marketing")
//await page.waitForTimeout(2000)
await page.locator("//p[@class='slds-truncate']").click()
await page.waitForTimeout(2000)
// 8. Step: Click on the New button to create a lead.
await page.locator("(//span[text()='Leads'])[1]").click()
//await page.waitForTimeout(2000)
await page.locator("//div[text()='New']").click()
//await page.waitForTimeout(2000)
// 9. Step: Fill in all the mandatory fields (Salutation, First Name, Last Name, Company) with valid
// data.
await page.locator("(//button[@role='combobox'])[2]").click()
await page.locator("(//span[text()='Mr.'])[1]").click()
await page.getByPlaceholder("First Name").fill("Veera")
await page.getByPlaceholder("Last Name").fill("Kumar")
await page.locator("//input[@name='Company']").fill("Testleaf")
//10. Step: Click on the Save button.
await page.locator("//button[@name='SaveEdit']").click()
const toast = page.locator("//span[contains(@class,'toastMessage')]")
await expect(toast).toBeVisible();
const toastmessage = await toast.innerText();
console.log('Toast Message:', toastmessage);
await page.waitForTimeout(2000)
// 11. Step: In the newly created Lead page, locate the dropdown near Submit for Approval button and
// click on the Convert link.
// 12. Step: Click on the Opportunity Name input field, clear and enter a new opportunity name.
// 13. Step: Click on the Convert button.
await page.getByRole('button',{name:'Convert'}).click()
await page.locator("//span[text()=' Create New Opportunity']").click()

 const opportunityName =  page.getByRole('textbox', { name: 'Opportunity Name *' })
 await opportunityName.click()
await opportunityName.fill('')
await opportunityName.fill('Media');
await page.locator("(//button[text()='Convert'])[2]").click()
await page.waitForTimeout(2000)

const message = page.getByText('Your lead has been converted');

  await expect(message).toBeVisible();

  const text = await message.innerText();
  console.log('Confirmation:', text);

//14. Step: Click on the Go to Leads button.
await page.click("//button[text()='Go to Leads']")

//15. Step: Search the verified lead name in the Search box and verify the text ‘No items to display’.
await page.getByPlaceholder("Search this list...").fill("Veera")
await page.keyboard.press('Enter')
//await expect(page.getByText('No items to display')).toBeVisible();

//await expect(page.getByText('No items to display')).toBeVisible();
//await expect.soft(page.locator('.slds-col.slds-no-space.display-wrapper')).toHaveCount(2);
//locator issue
await page.waitForTimeout(2000)
//16. Step: Navigate to the Opportunities tab and search for the opportunity linked with the converted lead.
await page.locator("//span[text()='Opportunities']").click()

//17. Step: Search the opportunity name created and click on the created opportunity name.
await page.getByPlaceholder("Search this list...").fill("Media")
await page.keyboard.press('Enter')
await page.getByTitle("Media").first().click()

 const message1 = page.locator("(//slot[contains(@class,'slds-page-header__title')])[1]");
//wrong locator
  await expect(message1).toBeVisible();

  const text1 = await message1.innerText();
  console.log('Confirmation:', text1);
    
})
