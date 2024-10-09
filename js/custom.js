function moveDateCon() {
    const homeContents = document.querySelector('.home_contents');
    const introExcerpt = document.querySelector('.intro-excerpt');
    const dateCon = document.querySelector('.date-con');

    if (window.innerWidth >= 550 && window.innerWidth < 1000) {
        // Move dateCon outside homeContents between 550px and 1000px
        if (homeContents && homeContents.contains(dateCon)) {
            homeContents.parentNode.insertBefore(dateCon, homeContents.nextSibling);
        }
    } else if (window.innerWidth < 550) {
        // Move dateCon back inside introExcerpt when less than 550px
        if (!introExcerpt.contains(dateCon)) {
            introExcerpt.appendChild(dateCon);
        }
    } else if (window.innerWidth >= 1000) {
        // Move dateCon back inside introExcerpt when greater than 1000px
        if (!introExcerpt.contains(dateCon)) {
            introExcerpt.appendChild(dateCon);
        }
    }
}

window.addEventListener('load', moveDateCon);
window.addEventListener('resize', moveDateCon);
