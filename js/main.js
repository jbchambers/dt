$(document).ready(function(){
    // LOVE WHAT YOU DO
    $('.love-carousel').bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideMargin: 10,
        ticker: true,
        speed: 15000
    });
    // GREAT PEOPLE
    $('.team-carousel').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0,
        easing: 'ease-in-out'
    });
});