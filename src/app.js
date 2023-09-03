import './index.css';
import { ContextMenu } from './menu.js';
import { setInitialAppSettings, initializeContextMenu } from './app-manager.js';

// Объединяет функции управления приложением в один объект
const appManager = { setInitialAppSettings, initializeContextMenu }

// Применяет глобальные настройки приложения (например, фоновый цвет)
appManager.setInitialAppSettings();

// Создает и инициализирует контекстное меню
const contextMenu = new ContextMenu('#menu');
appManager.initializeContextMenu(contextMenu);