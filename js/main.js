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



document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll('.accordion-button');

    accordionItems.forEach(item => {
        item.addEventListener('click', function () {
            const currentAccordion = this.closest('.accordion-item');
            const accordionCollapse = currentAccordion.querySelector('.accordion-collapse');

            // Close other open accordions
            accordionItems.forEach(otherItem => {
                const otherAccordion = otherItem.closest('.accordion-item');
                if (otherAccordion !== currentAccordion && otherItem.getAttribute('aria-expanded') === 'true') {
                    otherItem.classList.add('collapsed');
                    const collapse = otherAccordion.querySelector('.accordion-collapse');
                    collapse.style.maxHeight = null;
                    collapse.classList.remove('show');
                }
            });

            // Toggle the height of the clicked accordion
            if (accordionCollapse.classList.contains('show')) {
                accordionCollapse.style.maxHeight = accordionCollapse.scrollHeight + "px";
                setTimeout(() => {
                    accordionCollapse.style.maxHeight = null;
                }, 10); // Set timeout to allow smooth closing transition
            } else {
                accordionCollapse.style.maxHeight = accordionCollapse.scrollHeight + "px";
            }
        });
    });
});
