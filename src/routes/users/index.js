const{ Router}= require("express") ; 
const{createuser , getuserbyid , getuserbyname}=require("../../controllers/users")
const route= Router() ; 

route.get("/" , (req, res)=>{
    res.send("//TODO all users " ) ; 
})

route.get("/:id" ,async  (req, res)=>{
    let user  ; 
    if(isNaN(parseInt(req.params.id))){
   user = await getuserbyname(req.params.id) ; 
   console.log(user) ; 
    }
    else {
        user = await getuserbyid(req.params.id) ; 
        console.log(user) ; 
    }


    if(user){
        res.status(200).send(user) ; 
    }
    else {
        res.status(404).send({
            error:" No such User Found" 
        })
    }
})

route.post("/" , async (req, res)=>{
    const user =  await createuser() ; 
    res.status(201).send(user) ; 
})


module.exports={
    
    userroute:route 
 }