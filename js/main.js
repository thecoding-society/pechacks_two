// get preloader
const preloader = document.querySelector("#preloader");

window.addEventListener("load", () => {
	// load

	console.log("preloader removed");
	preloader.style.transition = "1s ease";
	setTimeout(() => {
		preloader.style.opacity = 0;
		preloader.style.display = "none";
	}, 1000);
});



document.addEventListener('DOMContentLoaded', function () {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    const accordionContents = document.querySelectorAll('.accordion-content');

    accordionButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const content = accordionContents[index];

            // Close all other accordion items
            accordionContents.forEach((otherContent, otherIndex) => {
                if (otherIndex !== index) {
                    otherContent.style.maxHeight = null;
                    otherContent.classList.remove('open');
                    accordionButtons[otherIndex].classList.add('collapsed');
                }
            });

            // Toggle current accordion item
            if (content.classList.contains('open')) {
                content.style.maxHeight = null;
                content.classList.remove('open');
                button.classList.add('collapsed');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.classList.add('open');
                button.classList.remove('collapsed');
            }
        });
    });
});



// Time line script

document.addEventListener("DOMContentLoaded", function () {
    const timelineLine = document.querySelector('.timeline-line');
    const timelineSection = document.querySelector('#hackathon-timeline');
    let isLineRevealed = false; // Flag to ensure reveal happens only once

    // Initialize AOS for animating event boxes
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true,     // Trigger animation only once
    });

    // Reveal timeline line on scroll
    const revealTimelineLine = () => {
        if (isLineRevealed) return; // Stop if already revealed

        const sectionRect = timelineSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if timeline section is in the viewport
        if (sectionRect.top <= windowHeight && sectionRect.bottom >= 0) {
            const visibleHeight = Math.min(windowHeight - sectionRect.top, sectionRect.height);
            const totalHeight = sectionRect.height;

            // Calculate the percentage of the section scrolled and adjust the height of the line
            const scrollPercentage = Math.min(visibleHeight / totalHeight, 1);
            timelineLine.style.height = `${scrollPercentage * 100}%`;

            // If the line has fully revealed, set the flag to true
            if (scrollPercentage === 1) {
                isLineRevealed = true;
            }
        }
    };

    // Listen for scroll event
    window.addEventListener("scroll", revealTimelineLine);

    // Initial check in case the section is already in view
    revealTimelineLine();
});