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

    add(classArray) {
        classArray.forEach(Class => {
            const item = document.createElement('li');
            item.textContent = Class.menuName;
            item.classList.add('menu-item');
            this.el.appendChild(item);

            // Добавляет слушателя для элемента меню
            item.addEventListener('click', (event) => {
                new Class().trigger();
            });
        });
    }

    #setupMenuInteractions = () => {
        document.addEventListener('contextmenu', event => {
            event.preventDefault(); // Запрещает стандартное контекстное меню
            this.open(event.clientX, event.clientY);
        });

        // Закрывает меню при клике вне его
        document.addEventListener('click', () => this.close());
    }
}
