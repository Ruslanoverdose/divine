$(function() {
    window.addEventListener("scroll", scroll)
    
});

function scroll() {
    let scrollTop = $('html').scrollTop()
    
    if (scrollTop < 100)  {
        $("#navigation").addClass('navStart') 
        $("#navigation nav").addClass('scrollStart') 
        $("#navigation").removeClass('navChange') 
        $("#navigation nav").removeClass('scrollChange') 
    
    } else {
        $("#navigation").addClass('navChange') 
        $("#navigation nav").addClass('scrollChange') 
        $("#navigation").removeClass('navStart') 
        $("#navigation nav").removeClass('scrollStart') 
    }
}