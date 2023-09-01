import './styles.css'
import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module.js';

const contextMenu = new ContextMenu('#menu');
const classArray = [BackgroundModule]
contextMenu.add(classArray);