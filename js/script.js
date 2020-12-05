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
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 Up
            0: {
                items: 1,
            },
            //breakpoint from 480 Up
            480: {
                items: 2,
            }
        }
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

/*===============================================
                    Testimoniols
===============================================*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/*===============================================
                    Stats
===============================================*/
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});

/*===============================================
                    Clients
===============================================*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 Up
            0: {
                items: 2,
            },
            //breakpoint from 480 Up
            480: {
                items: 3,
            },
            //breakpoint from 768 Up
            768: {
                items: 6,
            }
        }
    });
});

/*===============================================
                    Google Map
===============================================*/
$(window).on('load', function () {

    //Map Variables
    var addressString = 'tatvasoft rajpath rangoli road prl colony thaltej ahmedabad gujarat';
    var myLatlng = {
        lat: 23.035890,
        lng: 72.486400
    };

    // 1. Rander Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click to see Address "
    });

    // 3. Add Info window
    var infowindow = new google.maps.InfoWindow({
        content: addressString,
    });

    // Show info wondow when user click marker
    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });

    // 4. Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);

    });

});

/*===============================================
                    Navigation
===============================================*/
$(function () {

    //Show/Hide nav on page load
    ShowHideNav();

    $(window).scroll(function () {

        //Show/Hide nav on window's Scroll
        ShowHideNav();

    });

    function ShowHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show white nav
            $("nav").addClass("white-nav-top");

            // Show dark logo 
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            //Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav
            $("nav").removeClass("white-nav-top");

            // Hide dark logo 
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            //Hide back to top button
            $("#back-to-top").fadeOut();

        }

    }

});

// Smooth Scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // Get Section id like #about, #services, #work and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});


/*===============================================
                    Mobile Menu
===============================================*/
$(function () {

    //Show Mobile Navigation
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    //Hide Mobile Navigation
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});