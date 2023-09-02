import { Module } from '../core/module'
import { getRandomColor } from '../utils.js'
import { setGlobalSettings } from '../local-storage.js'


export class BackgroundModule extends Module {
  constructor(labelText) {
    super('background', labelText || 'Change color');
  }

  trigger() {
    const strColor = getRandomColor();
    document.body.style.backgroundColor = strColor;
    setGlobalSettings({ backgroundColor: strColor })
  }
}