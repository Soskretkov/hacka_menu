import './index.css';
import { ContextMenu } from './menu.js';
import { BackgroundModule } from './modules/background.module.js';
import { ShapeModule } from './modules/shape.module.js';
import { setInitialAppSettings, initializeContextMenu } from './appManager.js';

// Объединяет функции управления приложением в один объект
const appManager = { setInitialAppSettings, initializeContextMenu }

// Применяет глобальные настройки приложения (например, фоновый цвет)
appManager.setInitialAppSettings();

// Создает и инициализирует контекстное меню
const contextMenu = new ContextMenu('#menu');
appManager.initializeContextMenu(contextMenu);