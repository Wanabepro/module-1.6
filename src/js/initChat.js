export const initChat = function () {
  const buttonOpenHeader = document.querySelector('.header__chat-button')
  const buttonOpenMenu = document.querySelector('.menu__chat-button')
  const buttonClose = document.querySelector('.chat__close-button')
  const chat = document.querySelector('.chat')

  buttonOpenHeader.addEventListener('click', openCallHandler)
  buttonOpenMenu.addEventListener('click', openCallHandler)

  buttonClose.addEventListener('click', function () {
    chat.style.display = 'none'
  })

  function openCallHandler() {
    chat.style.display = 'block'
  }
}