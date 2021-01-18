const {Users}= require("../db/db") ; 

const {genrandomname}= require("../utils/username") ;

async function createuser(){
  /*   console.log(genrandomname()) ;  */
    const user = await Users.create({
       
        username: await genrandomname()
    
    })
    console.log(genrandomname()) ; 
    return user ; 
}

async function getuserbyid(id){
    return await Users.findOne({where:{id}})
    
}
async function getuserbyname (username){
    return  await Users.findOne ({where :{username}}) 
  
}
module.exports={
    createuser , 
    getuserbyid  , 
    getuserbyname
}

 async function check(){
     console.log( await createuser() ); 
 }
 check() ; 