export const initCall = function () {
  const buttonOpenHeader = document.querySelector('.header__call-button')
  const buttonOpenMenu = document.querySelector('.menu__call-button')
  const buttonClose = document.querySelector('.call__close-button')
  const call = document.querySelector('.call')
  const input = document.querySelector('.call__form').querySelector('.call__input')

  buttonOpenHeader.addEventListener('click', openCallHandler)
  buttonOpenMenu.addEventListener('click', openCallHandler)

  buttonClose.addEventListener('click', function () {
    call.style.display = 'none'
  })

  function openCallHandler() {
    call.style.display = 'block'
    input.focus()
  }
}