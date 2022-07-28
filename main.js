
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const shoppingCar = document.querySelector('.navbar-shopping-cart');
const menuShoppingCar = document.querySelector('.product-detail')

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

