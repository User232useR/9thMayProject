 
const select = document.getElementById('numer_class');
const shtuckaBlocks = document.querySelectorAll('.shtucka');

    // Функция для скрытия всех блоков кроме выбранного
    function toggleBlocks(selectedValue) {
        shtuckaBlocks.forEach(block => {
            // Если id блока совпадает со значением выбранного option, то показываем его, иначе скрываем
            if (block.id === selectedValue) {
                block.style.display = 'flex';
            } else {
                block.style.display = 'none';
            }
        });
    }

    // Вызываем функцию toggleBlocks при изменении значения в select
    select.addEventListener('change', function () {
        toggleBlocks(this.value);
    });

    // Показываем блок, соответствующий начальному выбранному значению
    toggleBlocks(select.value);


    // Отображение контента по клику
    const cards = document.querySelectorAll(".card")
    const okoshko = document.querySelector(".okoshko") 

    
    // Функция для отображения контента в окне
    function showContent(content) {
        const section = document.querySelector('.okoshko section');
        section.innerHTML = ''; // Очищаем предыдущий контент
        content.forEach(function (item) {
            const div = document.createElement('div');
            div.classList.add('clas')
            div.innerHTML = '<img src="' + item.scr + '" alt="' + item.text + '"><p>' + item.text + '</p>';
            section.appendChild(div);
        });
    }

    // Обработчик кликов по элементам с классом "card"
    cards.forEach(function (card) {
        card.addEventListener('click', function (event) {
            event.preventDefault(); // Отменяем стандартное действие перехода по ссылке
            const cardId = this.id; // Получаем id элемента, на который кликнули
            const data = arr.find(function (item) {
                return item.name == cardId;
            });
            if (data) {
                showContent(data.info);
                okoshko.classList.add('active'); // Показываем окно
            }
        });
    });

    // Обработчик клика на кнопку "назад"
    document.querySelector('.okoshko .knopka').addEventListener('click', function (event) {
        event.preventDefault(); // Отменяем стандартное действие перехода по ссылке
        okoshko.classList.remove('active'); // Скрываем окно
    });
