$(function() {
    window.addEventListener("scroll", scroll)
    $(".next").on("click","a", function (event) {
		event.preventDefault();
        console.log('asd')
        let id  = "#services"
        let top = $(id).offset().top;
		$('body,html, #wrapper').animate({scrollTop: top - 69}, 1000);
	});
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

 
	