import jquery from 'jquery';
import Flickity from 'flickity';
import 'jquery-mousewheel';
import 'malihu-custom-scrollbar-plugin';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';


window.jQuery = window.$ = jquery;

import 'flickity/dist/flickity.css';

(function () {

    /**
    * Burger-menu
    */
    $('.burger-menu').on('click', function () {
        var menu = $('.menu-nav');
        var logo = $('.logo');
        var header = $('#app-header');
        $(this).toggleClass('active');
        if (menu.is(':visible')) {
            menu.slideUp();
            logo.removeClass('active');
            header.removeClass('active');
        } else {
            menu.slideDown();
            logo.addClass('active');
            header.addClass('active');
        }
    });

    /**
     * Header form
     */
    $('#search-control').on('focus', function () {
        $('.search').addClass('active');
    });
    $('#search-control').on('blur', function () {
        $('.search').removeClass('active');
    });

    /**
     * Menu list
     */
    $('.menu-nav-list-item').on('click', function () {
        $('.menu-nav-list-item-menu').slideUp();
        $('.menu-nav-list-item').removeClass('active');
        if ($(this).children('ul').is(':visible')) {
            $(this).children('ul').slideUp();
        } else {
            $(this).children('ul').slideDown();
            $(this).addClass('active');
        }
    });

    /**
     * Form-label
     */
    $('.form-control').on('focus', function () {
        $(this).parent().addClass('in-focus');
    });
    $('.form-control').on('blur', function () {
        if ($(this).val() !== "") {
            $(this).parent().addClass('in-focus');
        } else {
            $(this).parent().removeClass('in-focus');
        }
    });

    /**
     * Pagination
     */
    $('.pagination-item').on('click', function (e) {
        e.preventDefault();

        $('.pagination-item').removeClass('active');
        $(this).addClass('active');
    });

    /**
     * Filters
     */
    var filters = $('#filters');    
    var modalMask = $('.modal-mask');
    var resetFilters = $('.filters-content-conduct-reset');

    $('.filters-open-btn-item').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        filters.toggleClass('is-active');
        modalMask.toggleClass('is-active');
    });
   
    $('.filters-content-conduct-close').on('click', function () {
        filters.removeClass('is-active');
        modalMask.removeClass('is-active');
    });

    $(modalMask).on('click', function () {
        filters.removeClass('is-active');
        modalMask.removeClass('is-active');
    });

    $(resetFilters).on('click', function () {
        $('.filters-content-item-list-cell').removeClass('active');
        $('.filters-list-inCell-item').removeClass('active');
        $('.filters-content-item-list-cell-filtersBy__link').removeClass('active');
    });

    $('.filters-content-item-list-cell').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

    $('.filters-list-inCell-item').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

    $('.filters-content-item-list-cell-filtersBy__link').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
        $('.filters-list-inCell').slideUp();
        if ($(this).siblings().eq(1).is(':visible')) {
            $(this).siblings().eq(1).slideUp();
        } else {
            $(this).siblings().eq(1).slideDown();
        }
    });


    /**
     * Scrollbar
     */
    $('.filters-content-item-centering--scrollbar').mCustomScrollbar({
        axis: "y",
        setHeight: 700
    });

    /**
     * Block animate
     */
    $('#app-header').addClass('animated bounceInDown');
    if ($('#header-banner').length > 0) {
        $('#header-banner').addClass('animated bounceInDown');
    }

    var windowHeight = $(window).height();

    $(window).on('scroll', function () {

        if ($('#catalog').length > 0) {
            if ($(this).scrollTop() + windowHeight >= $('#catalog').offset().top) {
                $('.catalog-slider-item--cosmetics .catalog-item--big').eq(0).addClass('animated slideInLeft');
                $('.catalog-slider-item--cosmetics .catalog-item--small').addClass('animated slideInRight');
            }
        }
        if ($('#catalog').length > 0) {
            if ($(this).scrollTop() + windowHeight >= $('.catalog-slider-item--drugs').offset().top) {
                $('.catalog-slider-item--drugs .catalog-item--normal').eq(0).addClass('animated slideInRight');
                $('.catalog-slider-item--drugs .catalog-item--small').addClass('animated slideInLeft');
            }
        }
        if ($('#social-initiative').length > 0) {
            if ($(this).scrollTop() + windowHeight >= $('#social-initiative').offset().top) {
                $('#social-initiative').addClass('animated zoomIn');
            }
        }
        if ($('#news').length > 0) {
            if ($(this).scrollTop() + windowHeight >= $('#news').offset().top) {
                $('.news-item--big').addClass('animated slideInLeft');
                $('.news-item--column').addClass('animated slideInRight');
                $('.news-item--empty').addClass('animated slideInRight');
            }
        }
        if ($('#ability').length > 0) {
            if ($(this).scrollTop() + windowHeight >= $('#ability').offset().top) {
                $('.ability-img').eq(0).addClass('animated slideInLeft');
                $('.ability-item').eq(0).addClass('animated slideInRight');
                $('.decoration-border').eq(0).addClass('animated zoomIn');
            }
        }
        if ($('#ability').length > 0) {
            if ($(this).scrollTop() + windowHeight >= $('.ability-item').eq(1).offset().top) {
                $('.ability-img').eq(1).addClass('animated slideInRight');
                $('.ability-item').eq(1).addClass('animated slideInLeft');
                $('.decoration-border').eq(1).addClass('animated zoomIn');
            }
        }
        if ($('#about').length > 0) {
            if ($(this).scrollTop() + windowHeight >= $('#about').offset().top) {
                $('.about-item').addClass('animated slideInLeft');
            }
        }
    });


})(jQuery)

/**
 * Sliders header banner
 */
var elem1 = document.querySelector('.header-banner-slider');
var asNavFor = document.querySelector('.header-banner-slider-nav')
if (elem1) {

    var flkty1 = new Flickity(elem1, {
        prevNextButtons: false,
        cellAlign: 'center',
        contain: true,
        pageDots: false,
        draggable: false,
        wrapAround: true,
    });

    var navFor = new Flickity(asNavFor, {
        pageDots: false,
        prevNextButtons: false,
        draggable: false,
        wrapAround: true,
        initialIndex: 1
    });


    var indexLength = flkty1.getCellElements().length;
    var dottedIndexContainer = $('.header-banner-slider-nav-index');

    for (var i = 0; i < indexLength; i++) {
        dottedIndexContainer.append(`<div class='header-banner-slider-nav-index__item'>${i + 1}</div>`);
    };

    var dottedIndex = $('.header-banner-slider-nav-index__item');
    dottedIndex.eq(0).addClass('active');

    flkty1.on('select', function (index) {
        navFor.select(index + 1);
        if (index === indexLength - 1) {
            navFor.select(0);
        }

        dottedIndex.removeClass('active');
        dottedIndex.eq(index).addClass('active');
    });

    navFor.on('staticClick', function (event, pointer, cellElement, cellIndex) {
        flkty1.select(cellIndex);
    });

    $(dottedIndex).on('click', function () {
        flkty1.select($(this).index())
    })

    var prevArrowHeader = document.querySelector('.header-banner-slider-nav-arrow-left');
    prevArrowHeader.addEventListener('click', function () {
        flkty1.previous(false, false);
    });

    var nextArrowHeader = document.querySelector('.header-banner-slider-nav-arrow-right');
    nextArrowHeader.addEventListener('click', function () {
        flkty1.next(false, false);
    });

}

/**
 * Sliders Catalog
 */
var elem2 = document.querySelector('.catalog-slider--cosmetics');

if (elem2) {

    var flkty2 = new Flickity(elem2, {
        prevNextButtons: false,
        pageDots: true,
        draggable: false,
        cellSelector: '.catalog-slider-item--cosmetics'
    });

    var prevArrowCatalogCosmetics = document.querySelector('.catalog-slider-nav-arrow-left--cosmetics');
    prevArrowCatalogCosmetics.addEventListener('click', function () {
        flkty2.previous(true, false);
    });

    var nextArrowCatalogCosmetics = document.querySelector('.catalog-slider-nav-arrow-right--cosmetics');
    nextArrowCatalogCosmetics.addEventListener('click', function () {
        flkty2.next(true, false);
    });
}

var elem3 = document.querySelector('.catalog-slider--drugs');

if (elem3) {

    var flkty3 = new Flickity(elem3, {
        prevNextButtons: false,
        pageDots: true,
        draggable: false,
        cellSelector: '.catalog-slider-item--drugs'
    });

    var prevArrowCatalogDrugs = document.querySelector('.catalog-slider-nav-arrow-left--drugs');
    prevArrowCatalogDrugs.addEventListener('click', function () {
        flkty3.previous(true, false);
    });

    var nextArrowCatalogDrugs = document.querySelector('.catalog-slider-nav-arrow-right--drugs');
    nextArrowCatalogDrugs.addEventListener('click', function () {
        flkty3.next(true, false);
    });
}

/**
 * Sliders Partners
 */
var elem4 = document.querySelector('.partners-slider');

if (elem4) {

    var flkty4 = new Flickity(elem4, {
        prevNextButtons: false,
        cellAlign: 'left',
        pageDots: true,
        draggable: true,
        cellSelector: '.partners-slider-item',
        wrapAround: true
    });

    var prevArrowCatalogCosmetics = document.querySelector('.partners-slider-nav-arrow-left');
    prevArrowCatalogCosmetics.addEventListener('click', function () {
        flkty4.previous(true, false);
    });

    var nextArrowCatalogCosmetics = document.querySelector('.partners-slider-nav-arrow-right');
    nextArrowCatalogCosmetics.addEventListener('click', function () {
        flkty4.next(true, false);
    });
}

/**
 * Sliders Promotional products
 */
var elem5 = document.querySelector('.promotional-products-slider');

if (elem5) {

    var flkty5 = new Flickity(elem5, {
        prevNextButtons: false,
        cellAlign: 'left',
        pageDots: true,
        draggable: true,
        cellSelector: '.promotional-products-slider-row',
        wrapAround: true
    });

    var prevArrowCatalogCosmetics = document.querySelector('.promotional-products-slider-nav-arrow-left');
    prevArrowCatalogCosmetics.addEventListener('click', function () {
        flkty5.previous(true, false);
    });

    var nextArrowCatalogCosmetics = document.querySelector('.promotional-products-slider-nav-arrow-right');
    nextArrowCatalogCosmetics.addEventListener('click', function () {
        flkty5.next(true, false);
    });
}
