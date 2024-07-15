const year = document.querySelector('.year')
const currentYear = new Date().getFullYear();
year.innerHTML = currentYear

//  button 


const button = document.querySelector(".btn-mobile")
const headernav = document.querySelector(".header")

button.addEventListener("click", function () {
    headernav.classList.toggle("nav-open")
})

const hero = document.querySelector('.section-hero')
const obs = new IntersectionObserver(function (entries) {
    const end = entries[0];
    console.log(end);
    
    if(end.isIntersecting ===false)
        document.querySelector('.header').classList.add('sticky');
    if(end.isIntersecting ===true)
        document.querySelector('.header').classList.remove('sticky');
}, 
{
    root: null,
    threshold: 0,
    rootMargin:"-80px"
})
obs.observe(hero);
