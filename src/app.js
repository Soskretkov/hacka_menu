import './styles.css'
import {ContextMenu} from './menu'
import { BackgroundModule } from './modules/background.module.js';

const contextMenu = new ContextMenu('#menu');
contextMenu.add([BackgroundModule]);