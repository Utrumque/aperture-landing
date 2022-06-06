const burger = document.querySelector('.burger');
const burgerActive = document.querySelector('.burger--active');
const burgerMenu = document.querySelector('.burger__menu');
const burgerMenuActive = document.querySelector('.burger__menu--active');
const header = document.querySelector('.header');
const body = document.querySelector("body");
const headerScrolling = document.querySelector(".header__scrolling");

const toggleMenu = () => {
  burger.classList.toggle('burger--active');
  burgerMenu.classList.toggle('burger__menu--active');
  body.classList.toggle('overflow__none');
}

burger.addEventListener('click', e => {
  e.stopPropagation();

  toggleMenu();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_burgerMenu = target == burgerMenu || burgerMenu.contains(target);
  let its_burger = target == burger;
  let burgerMenu_is_active = burgerMenu.classList.contains('burger__menu--active');
  
  if (!its_burgerMenu && !its_burger && burgerMenu_is_active) {
    toggleMenu();
  }
})

