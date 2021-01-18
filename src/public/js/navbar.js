let navlinks = $(".apple") ; 


navlinks.click((ev)=>{
    let componentsurl = `../components/${$(ev.target).attr('data-component')}.html`  ; 
    
    $("#content").load(componentsurl)
    
})