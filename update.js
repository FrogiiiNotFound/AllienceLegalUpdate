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
    const heading = event.target.closest('.wbs-accordion-3-heading');

    if (!heading) {
        return;
    }

    const content = heading.nextElementSibling;

    if (content && content.classList.contains('wbs-accordion-3-content')) {
        // Закрываем все открытые аккордеоны
        const allHeadings = document.querySelectorAll('.wbs-accordion-3-heading');
        const allContents = document.querySelectorAll('.wbs-accordion-3-content');

        allHeadings.forEach(h => h.classList.remove('active'));
        allContents.forEach(c => {
            c.classList.remove('active');
            c.style.height = '0'; // Сбрасываем высоту для плавного закрытия
        });

        // Открываем текущий аккордеон
        heading.classList.add('active');
        content.classList.add('active');
        content.style.height = content.scrollHeight + 'px'; // Устанавливаем высоту для плавного открытия
    }
});



const buttons = document.querySelectorAll('.button-active');
const modal = document.querySelector('.modal-1');
const closeButton = document.querySelector('.close'); // Находим элемент .close

buttons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block'; // Показываем модальное окно
    });
});

// Добавляем обработчик клика на элемент .close
closeButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Закрываем модальное окно
});

// Закрытие модального окна при клике вне его области
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});







// Функция для плавной прокрутки к элементу по ID
function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error(`Элемент с ID "${targetId}" не найден.`);
    }
}

// Обработчик события клика для кнопок с классом "header-link-1"
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('header-link-1')) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки (если это ссылка)

        // Проверяем, находимся ли мы на странице index.html
        if (window.location.pathname.includes('index.html')) {
            // Если на странице index.html, прокручиваем сразу к элементу
            smoothScrollTo('services');
        } else {
            // Если на другой странице, переходим на страницу index.html и прокручиваем там
            window.location.href = 'index.html#services';
        }
    }
});




// Функция для плавной прокрутки к элементу по ID
function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        console.error(`Элемент с ID "${targetId}" не найден.`);
    }
}

// Обработчик события клика для кнопок с классом "header-link-2"
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('header-link-2')) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки (если это ссылка)

        // Проверяем, находимся ли мы на странице AllianceLegalSolutions.html
        if (window.location.pathname.includes('index.html')) {
            // Если на странице AllianceLegalSolutions.html, прокручиваем сразу к элементу
            smoothScrollTo('team');
        } else {
            // Если на другой странице, переходим на страницу AllianceLegalSolutions.html и прокручиваем там
            window.location.href = 'index.html#team';
        }
    }
});
