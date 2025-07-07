const menu = document.querySelector('#menu-icon')
const navList = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}

const scrollReveal = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true,
})

scrollReveal.reveal('.hero-text', {delay: 200, origin: 'right'})
scrollReveal.reveal('.hero-img', {delay: 300, origin: 'bottom'})
scrollReveal.reveal('.icons', {delay: 180, origin: 'left'})
scrollReveal.reveal('.scroll-down', {delay: 500, origin: 'top'})
scrollReveal.reveal('.navlist', {delay: 200, origin: 'top'})
