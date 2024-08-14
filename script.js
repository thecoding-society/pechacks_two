$(document).ready(function() {
    var t = 0;
    var r = 300; // Increased radius for more space between boxes
    var xcenter = 250; // Updated to match increased container size
    var ycenter = 250; // Updated to match increased container size
    var speed = 0.010; // Slightly increased speed for readability

    function moveBox(boxId, offset) {
        var tLocal = offset;

        function animateBox() {
            tLocal -= speed; // Decrement angle to change direction

            var newLeft = Math.floor(xcenter + (r * Math.cos(tLocal)));
            var newTop = Math.floor(ycenter - (r * Math.sin(tLocal))); // Move in upper semi-circle

            $(boxId).css({ 
                top: newTop + 'px', 
                left: newLeft + 'px',
                opacity: (Math.sin(tLocal) > 0) ? 1 : 0 // Fade out when moving to the lower part
            });

            requestAnimationFrame(animateBox);
        }

        animateBox();
    }

    // Animate each box with a delay to follow each other
    var numBoxes = 12;
    for (var i = 0; i < numBoxes; i++) {
        moveBox('#box' + (i + 1), i * (Math.PI / (numBoxes / 2)));
    }
});
