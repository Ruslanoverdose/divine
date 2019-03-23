$(function() {
    window.addEventListener("scroll", scroll)
    $(".next").on("click","a", function (event) {
		event.preventDefault();
        let id  = "#services"
        let top = $(id).offset().top;
		$('body,html, #wrapper').animate({scrollTop: top - 69}, 1000);
    });
    
    $("#navigation ul").on("click","a", function (event) {
		event.preventDefault();
        let id  = $(this).attr('href')
        let top = $(id).offset().top;
		$('body,html, #wrapper').animate({scrollTop: top - 69}, 1000);
	});
});

function scroll() {
    let scrollTop = $('html').scrollTop()
    
    if (scrollTop < 100)  {
        $(".mainPageNav").addClass('navStart') 
        $(".PageNav").addClass('navRelative') 
        $(".mainPageNav nav, .PageNav nav").addClass('scrollStart') 
        $(".mainPageNav, .PageNav").removeClass('navChange') 
        $(".PageNav").removeClass('navFixed') 
        $(".mainPageNav nav, .PageNav nav").removeClass('scrollChange') 
    
    } else {
        $(".mainPageNav, .PageNav").addClass('navChange') 
        $(".PageNav").addClass('navFixed') 
        $(".mainPageNav nav, .PageNav nav").addClass('scrollChange') 
        $(".mainPageNav").removeClass('navStart') 
        $(".PageNav").removeClass('navRelative') 
        $(".mainPageNav nav, .PageNav nav").removeClass('scrollStart') 
    }
}

 
	