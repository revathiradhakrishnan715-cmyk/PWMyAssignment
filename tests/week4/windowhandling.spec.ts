// Classroom
// https://www.leafground.com/window.xhtml
// -> click on Open button
// -> switch to child page
// -> Child Page -> Enter Message
// -> close childpage
// -> click on open multiple
import { test, expect, chromium } from '@playwright/test';

test ("window handling", async({page,context})=>{

    await page.goto("https://www.leafground.com/window.xhtml")
    await page.waitForTimeout(2000)
//single window
    const promise = context.waitForEvent('page');
    await page.locator("//span[text()='Open']").click()
    const childpage =await promise
    const dashboard = await childpage.getByPlaceholder("Write your message...").fill("Window handling")
    await page.waitForTimeout(2000)
    childpage.close()


//Multiple window
//create promise
const [allwindow]=await Promise.all([
//action
context.waitForEvent('page'),
 page.locator("//span[text()='Open Multiple']").click()
])


//[allwindow]-> [p,ch1,ch2.....]
const count=allwindow.context().pages()
console.log(count.length)
await allwindow.waitForTimeout(4000)


//Title -> Best way to handle multiple window 
//DashBroad,WebTable -> child page name
let dashBroad:any
let webTable:any


for(let i=0;i<count.length;i++){
    const title=await count[i].title()
    // console.log(title) ->Web Table ,Dashboard
    // await page.waitForTimeout(4000)


    if(title==="Dashboard"){
        //resolve the promise
        dashBroad=count[i]
    }else if(title==="Web Table"){
        webTable=count[i]
    }
}
dashBroad.locator("//input[@id='email']").fill("newmail@gmail.com")
await dashBroad.waitForTimeout(5000)



})

