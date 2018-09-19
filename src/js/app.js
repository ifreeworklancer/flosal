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

    if ($(window).width() < 900) {
        $('.filters-content-item__title').on('click', function (e) {
            e.preventDefault();
            $(this).siblings().children().slideToggle();
        });
    }

    if ($(window).width() < 900) {
        $('.filters-content-item__title-scrollbar').on('click', function (e) {
            e.preventDefault();
            $(this).siblings().slideToggle();
            $(this).siblings().children().children().children().eq(0).slideToggle();
            console.log($(this).siblings().children().children().children().eq(0));
        });
    }

    /**
     * Scrollbar
     */

    if ($(window).width() < 900) {
        $('.filters-content-item-centering--scrollbar').mCustomScrollbar({
            axis: "y",
            setHeight: 200
        });
    }
    if ($(window).width() > 900) {
        $('.filters-content-item-centering--scrollbar').mCustomScrollbar({
            axis: "y",
            setHeight: 700
        });
    }

    $('.cosmetologist-change-city-scrollbar').mCustomScrollbar({
        axis: "y",
        setHeight: 400
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

    /**
  * Form-label
  */
    $('.form-control').on('focus', function () {
        $(this).parent().addClass('in-focus');
    });
    $('.form-control').on('blur', function () {
        $(this).parent().removeClass('in-focus');
        if ($(this).val() !== "") {
            $(this).parent().addClass('in-filed');
        } else {
            $(this).parent().removeClass('in-filed');
        }
    });

    /**
     * Form Login
     */

    $('#login-checkme').on('change', function () {
        if ($(this).is(':checked')) {
            $(this).parent().addClass('is-checked');

            if ($('#login-email').parent().hasClass('is-wrong')) {
                $('#login-email').parent().removeClass('is-check');
            } else {
                $('#login-email').parent().addClass('is-check');
            }

        } else {
            $(this).parent().removeClass('is-checked');
            $('#login-email').parent().removeClass('is-check');
        }
    });

    $('#login-email').on('blur', function () {
        if ($(this).val() !== "") {
            if (isValidEmail($(this).val())) {
                $(this).parent().addClass('is-success');
                $(this).parent().removeClass('is-wrong');
            } else {
                $(this).parent().addClass('is-wrong');
                $(this).parent().removeClass('is-success');

                if ($('#login-email').parent().hasClass('is-wrong')) {
                    $('#login-email').parent().removeClass('is-check');
                }
            }
        }
    });

    /**
     * Form SingUp
     */

    $('#singup-checkme').on('change', function () {
        if ($(this).is(':checked')) {
            $(this).parent().addClass('is-checked');
            if ($('#singup-email').parent().hasClass('is-wrong')) {
                $('#singup-email').parent().removeClass('is-check');
            } else {
                $('#singup-email').parent().addClass('is-check');
            }
        } else {
            $(this).parent().removeClass('is-checked');
            $('#singup-email').parent().removeClass('is-check');
        }
    })

    $('#singup-cosmetologist').on('change', function () {
        if ($(this).is(':checked')) {
            $(this).parent().addClass('is-checked');
            $('#singup-file-label').addClass('is-checked');
        } else {
            $(this).parent().removeClass('is-checked');
            $('#singup-file-label').removeClass('is-checked');
        }
    })

    $('#singup-email').on('blur', function () {
        if ($(this).val() !== "") {
            if (isValidEmail($(this).val())) {
                $(this).parent().addClass('is-success');
                $(this).parent().removeClass('is-wrong');
            } else {
                $(this).parent().addClass('is-wrong');
                $(this).parent().removeClass('is-success');

                if ($('#singup-email').parent().hasClass('is-wrong')) {
                    $('#singup-email').parent().removeClass('is-check');
                }
            }
        }
    })


    $('#singup-confirmPassword').on('blur', function () {
        if ($(this).val() !== "") {
            if ($(this).val() === $('#singup-password').val()) {
                $(this).parent().addClass('is-success');
                $(this).parent().removeClass('is-wrong');
                $('#singup-password').parent().addClass('is-success');
            } else {
                $(this).parent().addClass('is-wrong');
                $(this).parent().removeClass('is-success');
                $('#singup-password').parent().removeClass('is-success');
            }
        }
    });

    $('.form-tooltip').on('click', function (e) {
        e.preventDefault();
    })

    function isValidEmail(email) {
        return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
    }

    /**
     * Cosmetologist
     */

    $('.cosmetologist-change-city-btn').on('click', function (e) {
        e.preventDefault();
        $(this).siblings().slideToggle();
        $(this).toggleClass('active');
        $('.cosmetologist-change-city').toggleClass('active');
    });

    $('.cosmetologist-change-city-list-item__link').on('click', function(e){
        e.preventDefault();
        $('.cosmetologist-change-city-list-item').removeClass('active');
        $(this).parent().toggleClass('active');
    })

    /**
     * Cosmetologist Open
     */
    $('#open-modal-make').on('click', function(e) {
        e.preventDefault();
        $('.make-modal').addClass('modal-active animated bounceInUp').removeClass('bounceOutDown');
    });

    $('.make-modal-close').on('click', function(e) {
        $('.make-modal').addClass('bounceOutDown');
        setTimeout(function() {
            $('.make-modal').removeClass('modal-active bounceInUp');
        }, 500)
        
    });

    /**
     * Tabs product card 
     */

    $('.product-card-desctiption-header-list').on('click', 'li:not(.active)', function () {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('.product-card-desctiption').find('.product-card-desctiption-body-item').removeClass('active').eq($(this).index()).addClass('active');
    });

    if($(window).width() < 768) {
        $('.product-card-desctiption-body-item').addClass('active');
    }

    /**
     * Form product value (Basket)
     */

    $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

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
var elem5 = document.querySelector('.slider-onSecondaryPage--promotional');

if (elem5) {

    var flkty5 = new Flickity(elem5, {
        prevNextButtons: false,
        cellAlign: 'left',
        pageDots: true,
        draggable: true,
        cellSelector: '.slider-onSecondaryPage-row--promotional',
        wrapAround: true
    });

    var prevArrowCatalogCosmetics = document.querySelector('.slider-onSecondaryPage-nav-arrow-left--promotional');
    prevArrowCatalogCosmetics.addEventListener('click', function () {
        flkty5.previous(true, false);
    });

    var nextArrowCatalogCosmetics = document.querySelector('.slider-onSecondaryPage-nav-arrow-right--promotional');
    nextArrowCatalogCosmetics.addEventListener('click', function () {
        flkty5.next(true, false);
    });
}

/**
 * Sliders Interesting products
 */
var elem6 = document.querySelector('.slider-onSecondaryPage--interesting');

if (elem6) {

    var flkty6 = new Flickity(elem6, {
        prevNextButtons: false,
        cellAlign: 'left',
        pageDots: true,
        draggable: true,
        cellSelector: '.slider-onSecondaryPage-row--interesting',
        wrapAround: true
    });

    var prevArrowCatalogCosmetics = document.querySelector('.slider-onSecondaryPage-nav-arrow-left--interesting');
    prevArrowCatalogCosmetics.addEventListener('click', function () {
        flkty6.previous(true, false);
    });

    var nextArrowCatalogCosmetics = document.querySelector('.slider-onSecondaryPage-nav-arrow-right--interesting');
    nextArrowCatalogCosmetics.addEventListener('click', function () {
        flkty6.next(true, false);
    });
}


/**
 * Sliders recommended products
 */
var elem7 = document.querySelector('.slider-onSecondaryPage--recommended');

if (elem7) {

    var flkty7 = new Flickity(elem7, {
        prevNextButtons: false,
        cellAlign: 'left',
        pageDots: true,
        draggable: true,
        cellSelector: '.slider-onSecondaryPage-row--recommended',
        wrapAround: true
    });

    var prevArrowCatalogCosmetics = document.querySelector('.slider-onSecondaryPage-nav-arrow-left--recommended');
    prevArrowCatalogCosmetics.addEventListener('click', function () {
        flkty7.previous(true, false);
    });

    var nextArrowCatalogCosmetics = document.querySelector('.slider-onSecondaryPage-nav-arrow-right--recommended');
    nextArrowCatalogCosmetics.addEventListener('click', function () {
        flkty7.next(true, false);
    });
}
