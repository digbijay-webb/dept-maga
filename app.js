const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggle nav
    burger.addEventListener('clicks',()=>{
        nav.classList.toggle('nav-active');

            //animate links
    navLinks.forEach((links, index) => {
        if (links.style.animation){
            links.style.animation ='';
        } else{
        links.style.animation = 'navLinksFade 0.5s ease forwards ${index / 5 + 1.5}s';
        }
    })
    burger.classList.toggle('toggle')
});

     navSlide();