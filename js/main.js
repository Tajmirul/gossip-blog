$(document).ready(function () {

    /* magnificPopup img view */
    // $('.popup-image').magnificPopup({
    //     type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
    // });

    /* magnificPopup video view */
    // $('.popup-video').magnificPopup({
    //     type: 'iframe'
    // });

    //for menu active class
    // $('.portfolio-menu button').on('click', function (event) {
    //     $(this).siblings('.active').removeClass('active');
    //     $(this).addClass('active');
    //     event.preventDefault();
    // });

    // WOW active
    // new WOW().init();

    // mixitup --------------------
    var filterContainer = $('.filter-container');
    if (filterContainer.length != 0){
        var mixer = mixitup(filterContainer);
    };

    // slick slider for banner 
    $('.slider-type-1').slick({
        dots: true,
        navs: false,
        autoplay: true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // my code ----------------------------------------------------------------------
    // preloader
    // $(".preloader").animate({
    //     top: -2000000
    // }, 1500);

    // sticky menu ber and go to top button
    // $(window).scroll(function () {
    //     var scrolled = $(window).scrollTop();
    //     var topMain = $('main').offset().top - 400;

    //     // go to top button
    //     if (scrolled > topMain) {
    //         $('.go-to-top').addClass('active');
    //         $('.nav-outer').addClass('sticky');

    //         $('.go-to-top').click(function () {
    //             $(window).scrollTop(0);
    //         });
    //     } else {
    //         $('.go-to-top').removeClass('active');
    //         $('.nav-outer').removeClass('sticky')
    //     }
    //     // console.log(scrolled);
    // });

    // menu bar open -------------------------
    $('.navigation-open').click(function () {
        $('.navbar-navigations-mobile').animate({
            'width': '30rem',
        }, 200);
    });
    // menu bar close -------------------------
    $('.navigation-close').click(function (event) {
        event.preventDefault()
        $('.navbar-navigations-mobile').animate({
            'width': '0',
        }, 200);
    });

    // tooltip -----------------
    $('[data-toggle="tooltip"]').tooltip();

});    
