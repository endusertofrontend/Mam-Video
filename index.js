function animation(){
    //animation to  increase font to 45px and then back to normal 
     $(document).ready(function(){
        $(".heading h1").animate({fontSize: "3rem"}, 1000).css("color", "red"); 
        
        setTimeout(function(){
            $(".heading h1").animate({fontSize: "2rem"}, 1000).css("color", "black");
        }, 3000);
     });

    //add border around my picture; was not asked to retunr border to normal 
    $(".photo img").css("border", "5px solid #555");
}
