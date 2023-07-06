export const initDevicesExpand = function () {
  let buttonState = true

  const button = document.querySelector('.devices__expand-button')
  const icon = document.querySelector('.devices__expand-button-icon')
  const buttonText = document.querySelector('.devices__expand-button-text')
  const brandsWrapper = document.querySelector('.devices__list-wrapper')

  button.addEventListener('click', function () {
    if (buttonState) {
      icon.style.transform = 'rotate(180deg)'
      buttonText.textContent = 'Скрыть'
      brandsWrapper.style.height = 'fit-content'
    } else {
      icon.style.transform = 'rotate(0deg)'
      buttonText.textContent = 'Показать все'
      brandsWrapper.style.height = '160px'
    }

    buttonState = !buttonState
  })
}