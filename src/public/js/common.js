$(()=>{
    $("#navbar").load("../components/navbar.html" ,loginifneeded)
    $("#footer").load("../components/footer.html")    ; 
   $("#content").load("../components/allposts.html") ; 
})


function loginifneeded(){
    window.currentuser = window.localStorage.user?JSON.parse(window.localStorage.user):null ; 

    if(!currentuser){
    $.post("/api/users" ,{} ,  (user)=>{
       if(user){
           console.log("logged in as " ,  user.username) ; 
        window.localStorage.user=JSON.stringify(user) ; 
        currentuser=user ; 
        $("#name").text(currentuser.username)
       }
      
    })
}
else{
    console.log("Resuming session as " , currentuser.username) ;
    $("#name").text(currentuser.username) 
  
}
}



