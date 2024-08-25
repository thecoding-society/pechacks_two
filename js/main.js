// get preloader
const preloader = document.querySelector('#preloader');

  window.addEventListener('load', () => {
    // load

    console.log('preloader removed');
    preloader.style.transition =  '1s ease';
    




    setTimeout(() => {
        preloader.style.opacity = 0;
    }, 1000)


  });
