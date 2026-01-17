import test, { expect } from '@playwright/test'
let uName="admin"
let pass="F/*jyM6Q6pHh"
let login= `${uName}:${pass}`
let info=btoa(login)

let sys_ID:any

test("Post Request in SN",async({request})=>{

    //uri
let postResponse= await request.post(`https://dev181504.service-now.com/api/now/table/incident`,{
    //headers
    headers:{
        "Content-Type":"application/json",
        "Authorization":`Basic ${info}`
    },
    //req body
    data:{
    "short_description": "Learn The Postman Basic in Playwright"
}
    
})

//res body
let res=await postResponse.json()
console.log(res)
sys_ID=res.result.sys_id
//console.log(sys_ID)
//val
expect(postResponse.status()).toBe(201)
})


test("Get Rquest",async({request})=>{

    let getReponse=await request.get(`https://dev181504.service-now.com/api/now/table/incident/${sys_ID}?sysparm_fields=business_impact%2Cincident_state`,{
  
         headers:{
        "Content-Type":"application/json",
        "Authorization":`Basic ${info}`
    }
    })
    let res1=await getReponse.json()
    console.log(res1)
})

test("Patch Rquest",async({request})=>{

    let getReponse=await request.patch(`https://dev181504.service-now.com/api/now/table/{tableName}/${sys_ID}`,{
  
         headers:{
        "Content-Type":"application/json",
        "Authorization":`Basic ${info}`
    },
    data:{
    "short_description": "API Postman in Playwright"
}
    })
    let res2=await getReponse.json()
    console.log(res2)
    
})