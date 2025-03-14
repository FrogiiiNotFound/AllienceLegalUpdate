document.addEventListener('DOMContentLoaded', function () {
    const swiperEl = document.querySelector('.testimonials-slider');

    const swiper = new Swiper(swiperEl, {
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
        },
        spaceBetween: 20,
        slidesPerView: 2, // Изменяем на "auto"
        slideWidthAuto: true,
        centeredSlides: true, // Добавляем опцию centeredSlides
        // slideWidthAuto: true, // Убираем эту опцию
        on: {
            init: function () {
                // Вычисляем количество видимых слайдов
                let visibleSlides = 0;
                for (let i = 0; i < this.slides.length; i++) {
                    const slideWidth = this.slides[i].offsetWidth + this.params.spaceBetween;
                    if (slideWidth <= swiperEl.offsetWidth) {
                        visibleSlides++;
                    } else {
                        break;
                    }
                }

                // Добавляем класс centered если видимых слайдов меньше чем 2
                if (visibleSlides < 2) {
                    swiperEl.classList.add('centered');
                }
            },
        },
        breakpoints: {
            100: {
                slidesPerView: 1
            },
            1400: {
                slidesPerView: 2
            }
        }
    });
});
