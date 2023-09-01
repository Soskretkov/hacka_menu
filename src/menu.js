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

            item.addEventListener('click', (event) => {
                new Class().trigger();
            });
        });
    }

    #setupMenuInteractions = () => {
        // Запрещаем стандартное контекстное меню
        document.addEventListener('contextmenu', event => {
            event.preventDefault();
            this.open(event.clientX, event.clientY);
        });

        // Закрываем меню при клике вне его
        document.addEventListener('click', () => this.close());

        // Добавляем слушатель для элементов меню
        this.el.addEventListener('click', event => {
            if (event.target.classList.contains('menu-item')) {
                console.log('Command:', event.target.textContent);
            }
        });
    }
}
