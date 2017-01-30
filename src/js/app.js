import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;

import sayHello from './lib/sayHello.js';
import setBackground from './lib/slider.js';
import tabMenu from './lib/tabMenu.js';
import createMap from './lib/map.js';

import slick from 'slick-carousel';

$(document).ready(function () {
    sayHello();
    tabMenu(4, 8);
    createMap();
    
    //    BEGIN - HEADER SLIDER
    var topSlider = $('.top-slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000
    });
    
    $(topSlider).find('.slick-dots').addClass('custom-slick-dots_top');
    //    END - HEADER SLIDER
    
    
    //    BEGIN - AWARDS SLIDER
    var awardsSlider = $('.awards__slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: $('.awards__prev'),
        nextArrow: $('.awards__next')
    });
    
    $(awardsSlider).find('.slick-slide').each(function () {
        $(this).addClass('custom-slick-slide');
    });
    //    END - AWARDS SLIDER
    
    
    //    BEGIN - TECH SLIDER
    var techSlider = $('.tech__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000
    });
    
    $(techSlider).find('.slick-dots').addClass('custom-slick-dots_tech');
    //    END - TECH SLIDER
    
    
    //    BEGIN - COMMENTS SLIDER
    var commentsSlider = $('.comments__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 6000
    });
    
    $(commentsSlider).find('.slick-dots').addClass('custom-slick-dots_comments');
    //    END - COMMENTS SLIDER
});