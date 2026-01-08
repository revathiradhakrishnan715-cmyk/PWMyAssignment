import test,{chromium, firefox, webkit}  from "@playwright/test";

test ("CreateLead", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(3000)
    await page.locator("[id='username']").fill("Demosalesmanager")
    await page.locator("[id='password']").fill("crmsfa")
    //await page.waitForTimeout(3000)
    await page.locator(".decorativeSubmit").click()
    await page.waitForTimeout(3000)
    await page.locator("text='CRM/SFA'").click()
    //await page.locator('//a[@id="ext-gen591"]').click()
    await page.locator("//a[text()='Leads']").click()
    
    await page.getByRole('link',{name: 'Create Lead'}).click()
    
    await page.locator("[id='createLeadForm_companyName']").fill("Health Care company")
    await page.locator("[id='createLeadForm_firstName']").fill("Mohan")
    await page.locator("[id='createLeadForm_lastName']").fill("Kumar")
    await page.locator("[id='createLeadForm_personalTitle']").fill("Mr.")
    await page.locator("[id='createLeadForm_generalProfTitle']").fill("Manager")
    await page.locator("[id='createLeadForm_annualRevenue']").fill("1000000")
    await page.locator("[id='createLeadForm_departmentName']").fill("Health care")
    await page.locator(".smallSubmit").click()

    const companyname = await page.locator ("#viewLead_companyName_sp").textContent()
    //await page.waitForTimeout(3000)
    const firstName = await page.locator ("#viewLead_firstName_sp"). textContent()
    //await page.waitForTimeout(3000)
    const lastName = await page.locator ("#viewLead_lastName_sp"). textContent()
    //await page.waitForTimeout(3000)
    const status = await page.locator ("#viewLead_statusId_sp"). textContent()
    //await page.waitForTimeout(3000)
    //console.log(`Company name: ${companyname}\nFirst Name: ${firstName} \nLast Name: ${lastName} \nStatus: ${status}`)
    console.log("Company name: " +companyname+"\n" +"First Name: " +firstName+ "\n"+"Last Name: " +lastName+ "\n"+"Status: " +status)
    const title = await page.title()
    console.log("Title: " +title)


})