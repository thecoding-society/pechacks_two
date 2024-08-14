document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider-track');
    sliders.forEach(slider => {
        const clone = slider.innerHTML;
        slider.innerHTML += clone;
    });
});
