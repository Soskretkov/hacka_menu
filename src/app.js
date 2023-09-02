import './styles.css';
import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module.js';

const contextMenu = new ContextMenu('#menu');
initializeContextMenu(contextMenu);

// Функция не является частью класса ContextMenu для гибкости нейминга (локализации)
function initializeContextMenu(contextMenu) {
    contextMenu.add(new BackgroundModule('Поменять цвет'));
}