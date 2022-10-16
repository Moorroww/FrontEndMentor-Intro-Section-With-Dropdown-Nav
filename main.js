const navUlElements = document.getElementsByTagName('ul')
const navRevealBox = document.getElementsByClassName('inner-list-box hidden')
const navArrowDown = document.getElementsByClassName('li-arrow-down')
const navArrowUp = document.getElementsByClassName('li-arrow-up')

navUlElements[0].addEventListener('click', () => {
    navUlElements[0].classList.toggle('active-ul')
    navRevealBox[0].classList.toggle('reveal')
    navArrowDown[0].classList.toggle('hidden')
    navArrowUp[0].classList.toggle('hidden')
})
navUlElements[1].addEventListener('click', () => {
    navUlElements[1].classList.toggle('active-ul')
    navRevealBox[1].classList.toggle('reveal')
    navArrowDown[1].classList.toggle('hidden')
    navArrowUp[1].classList.toggle('hidden')
})

const mobileMenuWrapper = document.getElementById('mobile-menu')
const menuOpenIcon = document.getElementById('menu-open')
const menuCloseIcon = document.getElementById('menu-close')
const navBar = document.getElementById('nav-bar')
const bgBlur = document.getElementById('black-bg')

menuOpenIcon.addEventListener('click', () => {
    mobileMenuWrapper.classList.add('menu-icon-pin-js')
    bgBlur.classList.remove('hidden')
    menuOpenIcon.classList.add('hidden')
    menuCloseIcon.classList.remove('hidden')
    navBar.style.display='flex'
})
menuCloseIcon.addEventListener('click', () => {
    mobileMenuWrapper.classList.remove('menu-icon-pin-js')
    bgBlur.classList.add('hidden')
    menuOpenIcon.classList.remove('hidden')
    menuCloseIcon.classList.add('hidden')
    navBar.style.display='none'
})



// Prevents menu bugs (by reseting) while menu changes to smaller or larger screen
window.addEventListener('resize', () => {
    console.log('r')
    mobileMenuWrapper.classList.remove('menu-icon-pin-js')
    bgBlur.classList.add('hidden')
    menuOpenIcon.classList.remove('hidden')
    menuCloseIcon.classList.add('hidden')
    navBar.style.display='none'
    if(innerWidth>950) {
        navBar.style.display='flex'
    }
})
