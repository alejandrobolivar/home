/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    // Course filtering functionality
    $(document).ready(function() {
        $(".filter-button-group .btn").click(function(){
            var value = $(this).attr('data-filter');
            
            // 1. Efecto visual en los botones (Cambiar color al activo)
            $(".filter-button-group .btn").removeClass("active");
            $(this).addClass("active");

            // 2. Lógica de filtrado
            if(value == "all") {
                // Si es 'todos', muestra todo con una pequeña animación
                $('.filter-item').fadeIn('1000');
            }
            else {
                // Oculta los que no coinciden
                $(".filter-item").not('.'+value).hide();
                // Muestra los que sí coinciden
                $('.filter-item').filter('.'+value).fadeIn('1000');
            }
        });
    });

    // Back to top button functionality
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
        return false;
    });

    // Initialize tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

})(jQuery); // End of use strict
