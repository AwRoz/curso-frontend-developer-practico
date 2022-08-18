const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const hamburgerIcon = document.querySelector('.hamburgerMenu')
const categoriesMenu = document.querySelector('.mobile-menu')
const orderPreview = document.querySelector('.product-detail')
const cartIcon = document.querySelector('.navbar-shopping-cart')

menuEmail.addEventListener('click',toggleDesktopMenu)
hamburgerIcon.addEventListener('click',toggleHamburgerMenu)
cartIcon.addEventListener('click',toggleOrderPreview)


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    orderPreview.classList.add('inactive')
}

function toggleHamburgerMenu(){
    categoriesMenu.classList.toggle('inactive')
    orderPreview.classList.add('inactive')
}

function toggleOrderPreview(){
    orderPreview.classList.toggle('inactive')
    categoriesMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}