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



document.addEventListener("DOMContentLoaded", () => {
  



	const nav_list = document.querySelector("#nav-js");
	const list_items = nav_list.querySelectorAll("li");

	list_items.forEach((item) => {
		item.addEventListener("click", () => {
			// remove 'active' class from all list items
			list_items.forEach((li) => li.classList.remove("active"));

			// add 'active' class to the clicked list item
			item.classList.add("active");
		});
	});
  

});
