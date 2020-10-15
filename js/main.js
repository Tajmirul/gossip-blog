$(document).ready(function () {
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
