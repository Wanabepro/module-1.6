export const initBurger = function () {
  const buttonOpen = document.querySelector('.header__menu-button')
  const buttonClose = document.querySelector('.menu__close-button')
  const background = document.querySelector('.menu__background')
  const menu = document.querySelector('.menu')

  buttonOpen.addEventListener('click', function () {
    menu.style.display = 'block'
  })

  buttonClose.addEventListener('click', function () {
    menu.style.display = 'none'
  })

  background.addEventListener('click', function (e) {
    if (e.target === background) {
      menu.style.display = 'none'
    }
  })
}