import { getGlobalSettings } from './localStorage.js';

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

export function setInitialAppSettings() {
    const globalSettings = getGlobalSettings();
    document.body.style.backgroundColor = globalSettings.backgroundColor;
}