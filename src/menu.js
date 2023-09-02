import { Menu } from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.#setupMenuInteractions();
    }

    open(x, y) {
        this.el.style.top = `${y}px`;
        this.el.style.left = `${x}px`;
        this.el.classList.add('open');
    }

    close() {
        this.el.classList.remove('open');
    }

    add(moduleClassesArray) {
        moduleClassesArray.forEach(Class => {
            const classInstance = new Class();
            const strHtml = classInstance.toHTML().trim(); // Получение HTML-строки

            this.el.insertAdjacentHTML('beforeend', strHtml);
            const $element = this.el.lastElementChild;

            // Назначает слушателя элементу в меню
            $element.addEventListener('click', (event) => {
                classInstance.trigger();
            });
        });
    }

    // Метод устанавливает базовые слушатели событий для контекстного меню (открытие, закрытие).
    // Является приватным, так как не предполагается вызов извне класса.
    // Стрелочная сигнатура упрощает работу с методом в виду однозначности this
    #setupMenuInteractions = () => {
        document.addEventListener('contextmenu', event => {
            event.preventDefault(); // Запрещает стандартное контекстное меню
            this.open(event.clientX, event.clientY);
        });

        // Закрывает меню при клике вне его
        document.addEventListener('click', () => this.close());
    }
}