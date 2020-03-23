$(function() {
    $('.slider__container').slick({
        prevArrow: '<span class="slider__arrow prev"><span class="icon"></span></span>',
        nextArrow: '<span class="slider__arrow next"><span class="icon"></span></span>',
    });
    $('.gallery_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });
});
