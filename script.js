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
  
//   Timer

function updateTimer() {
    // Set the future date (change this to Dec 28 if needed)
    future = Date.parse("Dec 28, 2024 8:00:00");
    now = new Date();
    diff = future - now;

    // If the difference is negative, the event has passed
    if (diff <= 0) {
        document.getElementById("timer").innerHTML = "<div>Event has passed</div>";
        return; // Stop further execution
    }

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer").innerHTML =
        "<div>" +
        d +
        "<span> Days</span></div>" +
        "<div>" +
        h +
        "<span> Hours</span></div>" +
        "<div>" +
        m +
        "<span> Minutes</span></div>" +
        "<div>" +
        s +
        "<span> Seconds</span></div>";
}

setInterval(updateTimer, 1000);


