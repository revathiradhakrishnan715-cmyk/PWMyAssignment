import test, { expect } from '@playwright/test'

let acc_Token:any
let inst_Url:any
let token_Type:any

let SF_Id:any


test("Generate Token",async({request})=>{

    let tokenRes=await request.post(`https://login.salesforce.com/services/oauth2/token`,{
  
         headers:{
            "Content-Type":"application/x-www-form-urlencoded",
            "Connection":"keep-alive"
    },
    form:{
        "grant_type":"password",
        "username":"revathiradhakrishnan0995.c636d7f60aea@agentforce.com",
        "password": "Test@2026G8cdBpCYpnEw1ZAilCWDy2sUj",
        "client_id":"3MVG97L7PWbPq6Uw3oMwFsuLmW.jQWtXdHmGdigtshib4a1kE3zT499KgB2woiRY5uRBZUe46_O7_sxnoNNef",
        "client_secret":"75C9A18FBD4D95A563E9B138196EAFBBE4847E9C2BA4F3A986D229152F6669DB"
    }
    })
  let res=await tokenRes.json()
acc_Token=res.access_token
inst_Url=res.instance_url
token_Type=res.token_type

console.log(acc_Token,inst_Url,token_Type)

})

// test("Create Lead Using Post Request",async({request})=>{

//     let postRes=await request.post(`${inst_url}/services/data/v65.0/sobjects/Lead/`,{
//         headers:{
//             "Content-Type":"application/json",
//             "Authorization":`${token_Type} ${acc_token}`
//         },
//         data:{
//                 "firstname":"Rajesh",
//                 "lastname": "Kumar",
//                 "company":"TestLeaf"
//         }

//     })

//     let res=await postRes.json()
//     SF_Id=res.id
//     console.log(SF_Id)
//     expect(res.id).toEqual(SF_Id)



// })