// Assignment: 2 Edit a Lead
// 1. Navigate to the url http://leaftaps.com/opentaps/control/main
// 2. Enter the username as ‘Demosalesmanager’
// 3. Enter the password as ‘crmsfa’
// 4. Click the Login button
// 5. Click CRM/SFA
// 6. Click Leads
// 7. Click Find Leads
// 8. Enter the first name
// 9. Click Find Leads button
// 10. Click the first resulting Lead ID
// 11. Click Edit
// 12. Edit Company name
// 13. Edit Annual Revenue
// 14. Edit Department
// 15. Enter Description
// 16. Click Update
// 17. Verify the edited fields and print the title of the page

import { test, expect } from '@playwright/test';

test ("EditLead", async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(3000)
    await page.locator("[id='username']").fill("Demosalesmanager")
    await page.locator("[id='password']").fill("crmsfa")
    await page.waitForTimeout(3000)
    await page.locator(".decorativeSubmit").click()
    await page.waitForTimeout(3000)
    await page.locator("text='CRM/SFA'").click()
    //await page.locator('//a[@id="ext-gen591"]').click()
    await page.locator("//a[text()='Leads']").click()

    await page.getByRole('link',{name: 'Find Leads'}).click()
    await page.locator("//input[@name='firstName']").nth(2).fill("Mohan")
    await page.click("//button[text()='Find Leads']")

    await page.locator("//div[@class='x-grid3-cell-inner x-grid3-col-firstName']/a").first().click()
    await page.getByRole('link',{name: 'Edit'}).click()
    await page.waitForTimeout(3000)
    await page.locator("//input[@id='updateLeadForm_companyName']").fill("Sales Corp")
    await page.locator("//input[@id='updateLeadForm_annualRevenue']").fill("200000")
    await page.locator("//input[@id='updateLeadForm_departmentName']").fill("Enrollment")
    await page.locator("//textarea[@id='updateLeadForm_description']").fill("New Information is updated")
    await page.click("(//input[@name='submitButton'])[1]")
    

    const companyname = await page.locator ("//span[@id='viewLead_companyName_sp']").textContent()
    const AnnualRevenu = await page.locator ("//span[@id='viewLead_annualRevenue_sp']"). textContent()
    const departmentName = await page.locator ("//span[@id='viewLead_departmentName_sp']"). textContent()
    const description = await page.locator ("//span[@id='viewLead_description_sp']"). textContent()
    const status = await page.locator ("//span[@id='viewLead_statusId_sp']"). textContent()
    console.log("Company name: " +companyname+"\n" +"Annual Revenue: " +AnnualRevenu+ "\n"+"Department: " +departmentName+ "\n"+"Description: " +description+ "\n"+"Status: " +status )
    const title = await page.title()
    console.log("Title: " +title)

})