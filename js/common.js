$(function () {
// Custom JS
    //slick-slider
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
    });
    var $page = $('html, body');
    //smooth scroll anchor
    $('a[href*="#"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
    //hamburger
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
        // Do something else, like open/close menu
        if ($(".mobile_menu").css('display') == 'none') 
        { 
            $(".mobile_menu").animate({height: 'show'}, 500); 
        } 
        else 
        {     
            $(".mobile_menu").animate({height: 'hide'}, 500); 
        } 
    });
});
