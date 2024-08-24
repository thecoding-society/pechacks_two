/* Bronze owl carousel */

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000, // 3 seconds
        autoplayHoverPause: false, // Do not pause on hover
        smartSpeed: 1000, // Smooth transition
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3 // Display 3 items at a time
            }
        }
    });
  });
  00000000000000000000000000000000000000000000000000