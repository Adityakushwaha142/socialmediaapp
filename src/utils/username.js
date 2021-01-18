const adjective=[
    "rahul" , 
    "piyush" , 
    "aman" , 
    "kamal" , 
    "vishal" , 
    "aditya"  , 
    "akshay" , 
]
const objects =[
    "kushwaha" , "thakur" , "singh" , "aggarwal" , "singhal" , "bhola" , "gupta" 
]

function genrandomname(){
    const adj = adjective[Math.floor(Math.random()*7)] ; 
    const obj = objects[Math.floor(Math.random()*7)] ; 
    return (`${adj}-${obj}`)  ; 
}

 module.exports={
     genrandomname 
 }