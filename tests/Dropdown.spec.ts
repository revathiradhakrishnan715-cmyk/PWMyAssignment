import test,{chromium, firefox, webkit}  from "@playwright/test";

test ("Login telerik", async({page})=>{
    await page.goto("https://www.telerik.com/contact")
    await page.waitForTimeout(6000)

    page.selectOption("[id='Dropdown-1']",{label:"Invoicing/Billing"})
    page.selectOption("[id='Dropdown-2']",{index:6})
    page.selectOption("[id='Country-1']", {value:"Argentina"})

    await page.waitForTimeout(3000)

    


})