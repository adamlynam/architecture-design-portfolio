$(document).ready(function () {
    $('.gallery-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.gallery-navigation'
    });
    $('.gallery-navigation').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.gallery-slider',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
});