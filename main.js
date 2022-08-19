// || NAVBAR SECTION || 

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

//  || PRODUCTS LIST SECTION ||

//parent element
const cardsContainer = document.querySelector(".cards-container")

//array with products
let productsList = [
    {name:'Bicycle',price:120,image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {name:'TV',price:200,image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {name:'PC',price:400,image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
]

for (product of productsList) {
    //creating elements with properties
    productCard = document.createElement('div')
    productCard.setAttribute('class','product-card')

    cardImg = document.createElement('img')
    cardImg.setAttribute('src', product.image)
 
    productInfo = document.createElement('div')
    productInfo.setAttribute('class','product-info')

    productDetails = document.createElement('div')
    productDetails.setAttribute('clas','product-details')

    productPrice = document.createElement('p')
    productPrice.innerHTML = '$' + product.price

    productName = document.createElement('p')
    productName.innerHTML = product.name

    cardFigure = document.createElement('figure')
    cardFigureImg =document.createElement('img')
    cardFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg')

    //rendering elements
    cardsContainer.appendChild(productCard)
    productCard.appendChild(cardImg)
    productCard.appendChild(productInfo)
    productInfo.append(productDetails,cardFigure)
    productDetails.append(productPrice,productName)
    cardFigure.appendChild(cardFigureImg)
}

// <div class="cards-container">
  
//   <div class="product-card">
//     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//     <div class="product-info">
//       <div class="product-details">
//         <p class="product-price">$120,00</p>
//         <p>Bike</p>
//       </div>
//       <figure>
//         <img src="./icons/bt_add_to_cart.svg" alt="">
//       </figure>
//     </div>
//   </div>

// </div>
