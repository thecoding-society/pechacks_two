/* Bronze owl carousel */

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true, // Enable navigation arrows
        dots: false, // Disable dots
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        smartSpeed: 1000,
        navText: ["<span>&#8249;</span>", "<span>&#8250;</span>"], // Custom arrow icons
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 4 // Ensure 4 items fit within 800px
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


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 80; // Adjust this value based on your navbar's height
  
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });

