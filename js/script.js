/*===============================================
                    Preloader
===============================================*/
$(window).on('load', function () { // make sure whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*===============================================
                    Team
===============================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*===============================================
                    Progress Bar
===============================================*/
$(function () {

    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1300);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/*===============================================
                    Responsive Tabs
===============================================*/
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/*===============================================
                    Portfolio
===============================================*/
$(window).on('load', function () {

    //Initialize Isotope
    $("#isotope-container").isotope({

    });

    //filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/*===============================================
                    Megnifier
===============================================*/
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        },
    });
});
