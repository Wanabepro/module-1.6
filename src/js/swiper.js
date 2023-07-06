export const initSwiper = function () {
  if (window.innerWidth < 768) {
    new Swiper('.brands__list-wrapper', {
      slidesPerView: 1.2,
      spaceBetween: 16,
      pagination: {
        el: '.brands__pagination',
        clickable: true
      }
    })

    new Swiper('.devices__list-wrapper', {
      slidesPerView: 1.2,
      spaceBetween: 16,
      pagination: {
        el: '.devices__pagination',
        clickable: true
      }
    })

    new Swiper('.prices__swiper', {
      slidesPerView: 1.2,
      spaceBetween: 16,
      pagination: {
        el: '.prices__pagination',
        clickable: true
      }
    })
  }
}