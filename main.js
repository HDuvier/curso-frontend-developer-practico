
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const shoppingCar = document.querySelector('.navbar-shopping-cart');
const menuShoppingCar = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click",toggleMobileMenu)
shoppingCar.addEventListener("click",toggleCarMenu);

function toggleDesktopMenu() {
  menuShoppingCar.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  menuShoppingCar.classList.add('inactive');
  menuMobile.classList.toggle('inactive');
}

function toggleCarMenu(){
  menuMobile.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  menuShoppingCar.classList.toggle('inactive')
}

const productList = [];

productList.push({
  name: "bike",
  price: 120,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: "book",
  price: 120,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: "bee",
  price: 120,
  Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProduct(array) {

  for (product of array){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.Image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv =document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText ='$'+ product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    const productFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productFigure.appendChild(productImgCard);
  
    productInfoDiv.append(productPrice, productName);
  
    productInfo.append(productInfoDiv,productFigure);
  
    productCard.append(productImg,productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProduct(productList);