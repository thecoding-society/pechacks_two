// // 

// $(document).ready(function() {
//     var t = 0;
//     var speed = 0.002; // Slower speed for readability

//     function moveBox(boxId, offset, r, xcenter, ycenter) {
//         var tLocal = offset;

//         function animateBox() {
//             tLocal -= speed; // Decrement angle to rotate

//             var newLeft = Math.floor(xcenter + (r * Math.cos(tLocal)));
//             var newTop = Math.floor(ycenter - (r * Math.sin(tLocal)));

//             $(boxId).css({
//                 top: newTop + 'px',
//                 left: newLeft + 'px',
//                 opacity: (Math.sin(tLocal) > 0) ? 1 : 0 // Fade out on lower half
//             });

//             requestAnimationFrame(animateBox);
//         }

//         animateBox();
//     }

//     function initializeBoxes() {
//         var containerWidth = $('.domains-container').width();
//         var containerHeight = $('.domains-container').height();
//         var r = containerWidth / 3; // Dynamic radius based on container width
//         var xcenter = containerWidth / 4; // Dynamic x-center
//         var ycenter = containerHeight / 2; // Dynamic y-center

//         // Animate each box with a delay
//         var numBoxes = 12;
//         for (var i = 0; i < numBoxes; i++) {
//             moveBox('#box' + (i + 1), i * (Math.PI / (numBoxes / 2)), r, xcenter, ycenter);
//         }
//     }

//     // Initialize on document ready
//     initializeBoxes();

//     // Recalculate on window resize
//     $(window).resize(function() {
//         initializeBoxes();
//     });
// });