export const initReadMore = function () {
  let buttonState = true

  const button = document.querySelector('.services__read-more')
  const buttonText = button.querySelector('span')
  const arrow = button.querySelector('img')
  const text = document.querySelector('.services__text')

  const textHeight = text.offsetHeight

  button.addEventListener('click', function () {
    if (buttonState) {
      text.style.height = 'fit-content'
      buttonText.textContent = 'Скрыть'
      arrow.style.transform = 'rotate(180deg)'
    } else {
      text.style.height = textHeight + 'px'
      buttonText.textContent = 'Читать далее'
      arrow.style.transform = 'rotate(0deg)'
    }
    buttonState = !buttonState
  })
}