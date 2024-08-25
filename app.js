// Domains Script 

$(document).ready(function() {
    var t = 0;
    var r = 250; // Radius for proper spacing
    var xcenter = 200; // Center x-coordinate on the left side
    var ycenter = 350; // Center y-coordinate in the middle of the container
    var speed = 0.005; // Speed of the rotation

    function moveBox(boxId, offset) {
        var tLocal = offset;

        function animateBox() {
            tLocal -= speed; // Decrement angle to rotate

            var newLeft = Math.floor(xcenter + (r * Math.cos(tLocal)));
            var newTop = Math.floor(ycenter - (r * Math.sin(tLocal)));

            $(boxId).css({ 
                top: newTop + 'px', 
                left: newLeft + 'px',
                opacity: (Math.sin(tLocal) > 0) ? 1 : 0 // Fade out on lower half
            });

            requestAnimationFrame(animateBox);
        }

        animateBox();
    }

    // Animate each box with a delay
    var numBoxes = 12;
    for (var i = 0; i < numBoxes; i++) {
        moveBox('#box' + (i + 1), i * (Math.PI / (numBoxes / 2)));
    }
});
