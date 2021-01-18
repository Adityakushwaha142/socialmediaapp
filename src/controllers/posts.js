const{Posts ,Users}= require("../db/db") ;

async function createposts( userId , title, body)
{
    const post= await Posts.create({
     
    
        userId ,
        title  , 
        body
    })
    return post ; 
}
async function findallposts(){
    const post = await Posts.findAll({
        include:[Users]
    }) ; 


    return post  ; 
    console.log ( post) ; 
    post.forEach((t)=>{
        console.log(`${t.id} ${t.body} ${t.userId} ${t.user.username } ${t.title}`) ; 
    })
}

module.exports={
    createposts , 
    findallposts
}



