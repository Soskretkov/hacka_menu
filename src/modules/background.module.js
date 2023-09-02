import { Module } from '../core/module'
import { getRandomColor } from '../utils.js'


export class BackgroundModule extends Module {
  constructor() {
    super('background', 'Поменять цвет');
  }

  trigger() {
    document.body.style.backgroundColor = getRandomColor();
  }
}