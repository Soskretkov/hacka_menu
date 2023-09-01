import { Module } from '../core/module'
import { getRandomColor } from '../utils.js'


export class BackgroundModule extends Module {
  static menuName = 'Поменять цвет';

  constructor() {
    super('background', BackgroundModule.menuName);
  }

  trigger() {
    document.body.style.backgroundColor = getRandomColor();
  }
}