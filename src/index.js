import './index.css';
import { ContextMenu } from './menu.js';
import { BackgroundModule } from './modules/background.module.js';
import { setInitialAppSettings } from './AppManager.js';

setInitialAppSettings();
const contextMenu = new ContextMenu('#menu');
initializeContextMenu(contextMenu);

// Функция не является частью класса ContextMenu так как нейминг в меню желаетельно отделить
// от класса (удобно при локализации, ведь переводов может быть несколько, например, En, Ru)
function initializeContextMenu(contextMenu) {
    contextMenu.add(new BackgroundModule('Поменять цвет'));
}