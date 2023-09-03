import { getGlobalSettings } from './local-storage.js';
import { BackgroundModule } from './modules/background.module.js';
import { ShapeModule } from './modules/shape.module.js';
import { QuoteModule } from './modules/quote.module.js';
import { TimerModule } from './modules/timer.module.js';
import { SoundModule } from './modules/sound.module.js';
import { WeatherModule } from './modules/weather.module.js';


export function setInitialAppSettings() {
    const globalSettings = getGlobalSettings();
    document.body.style.backgroundColor = globalSettings.backgroundColor;
}


// Данная функция намеренно не является частью класса ContextMenu так как нейминг внутри меню важно отделить от логики модулей.
// Больший контроль на уровне app-manager.js не только нагляден, но и полезен (например, в сценарии мультиязычной локализации)
export function initializeContextMenu(contextMenu) {
    contextMenu.add(new BackgroundModule('Поменять цвет'));
    contextMenu.add(new ShapeModule('Создать фигуру'));
    contextMenu.add(new QuoteModule('Случайная цитата'));
    contextMenu.add(new TimerModule('Таймер'));
    contextMenu.add(new SoundModule('Случайный звук'));
    contextMenu.add(new WeatherModule('Узнать погоду'));
}


export function clearPreviousModuleEffects() {
    setInitialAppSettings();
    const $body = document.body;

    // Получает все дочерние элементы body
    const childrenArray = Array.from($body.children);

    // Проходит по дочерним элементам удаляет элемент, если у него нет класса "menu"
    childrenArray.forEach(child => {
        if (!child.classList.contains('menu')) {
            $body.removeChild(child);
        }
    });
}