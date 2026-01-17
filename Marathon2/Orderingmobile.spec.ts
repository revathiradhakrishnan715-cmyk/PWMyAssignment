import { test, expect } from '@playwright/test';

test('Orderingmobile' ,async({page})=>{
// 1. Launch browser and navigate to Service Now application URL
// 2. Login using valid admin credentials
    await page.goto("https://dev181504.service-now.com")
    await page.waitForTimeout(2000)
    await page.locator("#user_name").fill("admin")
    await page.locator("#user_password").fill("F/*jyM6Q6pHh")
    await page.locator("//button[text()='Log in']").click()
    await page.waitForTimeout(2000)
//3. Verify Service Now home page is displayed
    await page.getByAltText("ServiceNow Service Management").isVisible()
//4. Navigate to All → Service Catalog
    await page.getByRole('menuitem', { name: 'All' }).click();
    await page.getByRole('link', { name: 'Service Catalog 3 of' }).click();
    const frame = page .frameLocator("#gsft_main")
    //await page.waitForTimeout(2000)
    //await frame.getByRole('link',{ name:'Mobiles'}).first().click()
    await frame.locator("//a[text()='Mobiles']").click()
    await page.waitForTimeout(2000)
    //await frame.getByRole('img',{name:'Request for Apple iPhone 13'}).click()
    await frame.getByRole('link',{name:"Apple iPhone 13",exact: true }).click()
    await frame.locator(".radio-label").first().click()
    await frame.locator("//input[contains(@class,'cat_item_option sc')]").fill("9999999999")
    await frame.locator("//select[contains(@class,'form-control cat')]").selectOption({value: "500MB"})
    await frame.getByText("Blue").check()
    await frame.getByRole('button', { name: 'Order Now' }).click();
    await page.waitForTimeout(2000)
    const status= frame.getByText("Thank you, your request has been submitted")
    await expect(status).toBeVisible();
const message = await status.innerText();
console.log('orader status:', message);
    await page.screenshot({ path: 'fullpage.png', fullPage: true });
    //await page.waitForTimeout(2000)

})

