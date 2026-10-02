import { Router } from "express"
import { generateaccesstoken, getalluser, login, signup } from "./auth.service.js"
import { auth } from "../../common/middleware/index.js"

 
const router=Router()
router.post("/signup",async(req,res)=>{
    let data=await signup(req.body)
    res.json(data)
})
router.post("/login",async(req,res)=>{
    let data=await login(req.body)
    res.json(data)
})
router.get("/getuser",auth,async(req,res)=>{
console.log( req.user,"from controller");
let data=await getalluser(req.user.id)
res.json(data)
    
})
router.post("/generate_access_token",async(req,res)=>{
    let accesstoken=await generateaccesstoken(req.body)
    res.json(accesstoken)

})





export default router