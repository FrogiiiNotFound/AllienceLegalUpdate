document.addEventListener('DOMContentLoaded', function () {
    // Получаем кнопку
    const button = document.querySelector('.header-link-1');

    // Проверяем, что кнопка существует
    if (button) {
        // Добавляем обработчик события клика
        button.addEventListener('click', function (event) {
            // Предотвращаем стандартное поведение ссылки (если это ссылка)
            event.preventDefault();

            // Получаем блок, до которого нужно прокрутить
            const targetElement = document.getElementById('services');

            // Проверяем, что блок существует
            if (targetElement) {
                // Плавно прокручиваем до блока
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Добавляет плавную прокрутку
                });
            } else {
                console.warn('Элемент с id "services" не найден.');
            }
        });
    } else {
        console.warn('Кнопка с классом "header-link-1" не найдена.');
    }
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('wbs-accordion-3-heading')) {
        const heading = event.target;
        const content = heading.nextElementSibling; // Получаем следующий элемент (content)
        console.log("миу")
        // Проверяем, есть ли следующий элемент и является ли он элементом с классом 'wbs-accordion-3-content'
        if (content && content.classList.contains('wbs-accordion-3-content')) {
            // Закрываем все открытые аккордеоны (опционально)
            const allHeadings = document.querySelectorAll('.wbs-accordion-3-heading');
            const allContents = document.querySelectorAll('.wbs-accordion-3-content');

            allHeadings.forEach(h => h.classList.remove('active'));
            allContents.forEach(c => c.classList.remove('active'));


            // Открываем/закрываем текущий аккордеон
            heading.classList.add('active');
            content.classList.add('active');
        }
    }
});