document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".grid-image");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const closeBtn = document.getElementById("close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const leftArea = document.getElementById("leftArea");
    const rightArea = document.getElementById("rightArea");
    let currentIndex = 0;

    // Убедитесь, что модальное окно скрыто при загрузке страницы
    modal.style.display = "none";

    // Открытие изображения в модальном окне
    images.forEach((img, index) => {
        img.addEventListener("click", () => openModal(index));
    });

    // Функция открытия модального окна
    function openModal(index) {
        console.log("openModal called with index:", index); // Проверка вызова
        currentIndex = index;
        modalImage.src = images[currentIndex].src; // Установка src изображения
        modal.style.display = "flex"; // Отображение модального окна
        document.addEventListener("keydown", handleKeydown); // Подключение обработчика для клавиш
    }

    // Функция закрытия модального окна
    function closeModal() {
        modal.style.display = "none"; // Скрытие модального окна
        document.removeEventListener("keydown", handleKeydown); // Удаление обработчика для клавиш
    }

    // Навигация между изображениями
    function navigate(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        modalImage.src = images[currentIndex].src;
    }

    // Обработчик событий для клавиатуры
    function handleKeydown(event) {
        if (event.key === "ArrowLeft") navigate(-1); // Переход на предыдущее изображение
        if (event.key === "ArrowRight") navigate(1); // Переход на следующее изображение
        if (event.key === "Escape") closeModal(); // Закрытие модального окна при нажатии Escape
    }

    // Назначение событий для закрытия и навигации
    closeBtn.addEventListener("click", closeModal); // Закрытие модального окна при клике на кнопку
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal(); // Закрытие модального окна при клике вне изображения
    });
    prevBtn.addEventListener("click", () => navigate(-1)); // Переход на предыдущее изображение
    nextBtn.addEventListener("click", () => navigate(1)); // Переход на следующее изображение
    leftArea.addEventListener("click", () => navigate(-1)); // Переход на предыдущее изображение при клике на левую область
    rightArea.addEventListener("click", () => navigate(1)); // Переход на следующее изображение при клике на правую область
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active"); // Переключаем класс active
    });

    // Закрываем меню при клике на ссылку
    navMenu.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            navMenu.classList.remove("active");
        }
    });
});





// document.addEventListener("DOMContentLoaded", function() {
//     const images = document.querySelectorAll(".grid-image");
//     const modal = document.getElementById("modal");
//     const modalImage = document.getElementById("modal-image"); 
//     const closeBtn = document.getElementById("close");
//     const prevBtn = document.getElementById("prev");
//     const nextBtn = document.getElementById("next");
//     const leftArea = document.getElementById("leftArea");
//     const rightArea = document.getElementById("rightArea");
//     let currentIndex = 0;

//     // Открытие изображения в модальном окне
//     images.forEach((img, index) => {
//         img.addEventListener("click", () => {
//             currentIndex = index;
//             openModal(img.src);
//         });
//     });

//     // Функция открытия модального окна
//     function openModal(src) {
//         modal.style.display = "flex";
//         modalImage.src = src;
//         document.addEventListener("keydown", handleKeydown); // Добавляем обработчик для клавиш при открытии
//     }

//     // Закрытие модального окна
//     closeBtn.addEventListener("click", closeModal); // Вызываем closeModal при клике на кнопку закрытия
//     modal.addEventListener("click", (e) => {
//         if (e.target === modal) closeModal(); // Закрываем модальное окно при клике вне изображения
//     });

//     // Переход к предыдущему изображению
//     prevBtn.addEventListener("click", showPreviousImage);
//     leftArea.addEventListener("click", showPreviousImage); // Листание на предыдущее изображение при клике на левую область

//     // Переход к следующему изображению
//     nextBtn.addEventListener("click", showNextImage);
//     rightArea.addEventListener("click", showNextImage); // Листание на следующее изображение при клике на правую область

//     // Функция закрытия модального окна
//     function closeModal() {
//         modal.style.display = "none";
//         document.removeEventListener("keydown", handleKeydown); // Убираем обработчик клавиш при закрытии
//     }

//     // Функция для показа предыдущего изображения
//     function showPreviousImage() {
//         currentIndex = (currentIndex - 1 + images.length) % images.length;
//         modalImage.src = images[currentIndex].src;
//     }

//     // Функция для показа следующего изображения
//     function showNextImage() {
//         currentIndex = (currentIndex + 1) % images.length;
//         modalImage.src = images[currentIndex].src;
//     }

//     // Обработчик события для клавиш ArrowLeft и ArrowRight
//     function handleKeydown(event) {
//         if (event.key === "ArrowLeft") {
//             showPreviousImage();
//         } else if (event.key === "ArrowRight") {
//             showNextImage();
//         } else if (event.key === "Escape") {
//             closeModal(); // Закрываем модальное окно при нажатии Escape
//         }
//     }
// });




////////////////////////////////////////////////////////



// document.addEventListener("DOMContentLoaded", function() {
//     const images = document.querySelectorAll(".grid-image");
//     const modal = document.getElementById("modal");
//     const modalImage = document.getElementById("modal-image"); // Проверьте правильность id
//     const closeBtn = document.getElementById("close");
//     const prevBtn = document.getElementById("prev");
//     const nextBtn = document.getElementById("next");
//     let currentIndex = 0;

//     // Открытие изображения в модальном окне
//     images.forEach((img, index) => {
//         img.addEventListener("click", () => {
//             currentIndex = index;
//             openModal(img.src);
//         });
//     });

//     // Функция открытия модального окна
//     function openModal(src) {
//         modal.style.display = "flex";
//         modalImage.src = src;
//         document.addEventListener("keydown", handleKeydown); // Добавляем обработчик для клавиш при открытии
//     }

//     // Закрытие модального окна
//     closeBtn.addEventListener("click", closeModal); // Вызываем closeModal при клике на кнопку закрытия
//     modal.addEventListener("click", (e) => {
//         if (e.target === modal) closeModal(); // Закрываем модальное окно при клике вне изображения
//     });

//     // Переход к предыдущему изображению
//     prevBtn.addEventListener("click", showPreviousImage);

//     // Переход к следующему изображению
//     nextBtn.addEventListener("click", showNextImage);

//     // Функция закрытия модального окна
//     function closeModal() {
//         modal.style.display = "none";
//         document.removeEventListener("keydown", handleKeydown); // Убираем обработчик клавиш при закрытии
//     }

//     // Функция для показа предыдущего изображения
//     function showPreviousImage() {
//         currentIndex = (currentIndex - 1 + images.length) % images.length;
//         modalImage.src = images[currentIndex].src;
//     }

//     // Функция для показа следующего изображения
//     function showNextImage() {
//         currentIndex = (currentIndex + 1) % images.length;
//         modalImage.src = images[currentIndex].src;
//     }

//     // Обработчик события для клавиш ArrowLeft и ArrowRight
//     function handleKeydown(event) {
//         if (event.key === "ArrowLeft") {
//             showPreviousImage();
//         } else if (event.key === "ArrowRight") {
//             showNextImage();
//         } else if (event.key === "Escape") {
//             closeModal(); // Закрываем модальное окно при нажатии Escape
//         }
//     }
// });


//////////////////////////////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", function() {
//     const images = document.querySelectorAll(".grid-image");
//     const modal = document.getElementById("modal");
//     const modalImage = document.getElementById("modal-image");
//     const closeBtn = document.getElementById("close");
//     const prevBtn = document.getElementById("prev");
//     const nextBtn = document.getElementById("next");
//     let currentIndex = 0;

//     // Открытие изображения в модальном окне
//     images.forEach((img, index) => {
//         img.addEventListener("click", () => {
//             currentIndex = index;
//             openModal(img.src);
//         });
//     });

//     // Функция открытия модального окна
//     function openModal(src) {
//         modal.style.display = "flex";
//         modalImage.src = src;
//         document.addEventListener("keydown", handleKeydown);

//     }

//     // Закрытие модального окна
//     closeBtn.addEventListener("click", closeModal); // Вызываем closeModal при клике на кнопку закрытия
//     modal.addEventListener("click", (e) => {
//         if (e.target === modal) closeModal(); // Закрываем модальное окно при клике вне изображения
//     });

//     // Переход к предыдущему изображению
//     prevBtn.addEventListener("click", () => {
//         currentIndex = (currentIndex - 1 + images.length) % images.length;
//         modalImage.src = images[currentIndex].src;
//     });

//     // Переход к следующему изображению
//     nextBtn.addEventListener("click", () => {
//         currentIndex = (currentIndex + 1) % images.length;
//         modalImage.src = images[currentIndex].src;
//     });

//     // Закрытие модального окна при клике вне изображения
//     modal.addEventListener("click", (e) => {
//         if (e.target === modal) {
//             modal.style.display = "none";
//         }
//     });

//     function handleKeydown(event) {
//         if (event.key === "ArrowLeft") {
//             showPreviousImage(); // Показать предыдущее изображение
//         } else if (event.key === "ArrowRight") {
//             showNextImage(); // Показать следующее изображение
//         } else if (event.key === "Escape") {
//             closeModal(); // Закрыть модальное окно при нажатии Escape
//         }
//     }
// });

