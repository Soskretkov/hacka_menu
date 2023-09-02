import { Menu } from './core/menu.js'

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

    add(moduleInstance) {
        const strHtml = moduleInstance.toHTML().trim(); // Получение HTML-строки

        this.el.insertAdjacentHTML('beforeend', strHtml);
        const $element = this.el.lastElementChild;

        // Назначает слушателя элементу в меню
        $element.addEventListener('click', (event) => {
            moduleInstance.trigger();
        });
    }

    // Является приватным, так как не предполагается вызов извне класса.
    #setupMenuInteractions = () => {
        document.addEventListener('contextmenu', event => {
            event.preventDefault(); // Запрещает стандартное контекстное меню
            this.open(event.clientX, event.clientY);
        });

        // Закрывает меню при клике вне его
        document.addEventListener('click', () => this.close());
    }
}