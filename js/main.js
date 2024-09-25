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

