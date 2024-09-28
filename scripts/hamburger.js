const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        // FIXME: Animation not working?
        console.log(nav.style.display)
        if (nav.style.display === 'flex') {
            setTimeout(() => {
                nav.style.display = 'none'
            }, "500");
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        } else {
            setTimeout(() => {
                nav.classList.toggle('nav-active');
                burger.classList.toggle('toggle');
            }, "100");
            nav.style.display = 'flex'
        }
    });
}
navSlide();