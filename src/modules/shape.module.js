import './shape.module.css'
import { Module } from '../core/module'
import { getRandomColor, random, getRandomElementFromArray } from '../utils'
const utils = { getRandomColor, random, getRandomElementFromArray }
import { clearPreviousModuleEffects } from '../app-manager.js'
const appManager = { clearPreviousModuleEffects }


export class ShapeModule extends Module {
    constructor(labelText) {
        super('shapeModule', labelText || 'Create a figure')
    }

    trigger() {
        appManager.clearPreviousModuleEffects()
        this.#createRandomShape()
    }

    #createRandomShape = () => {
        const shape = document.createElement('div')
        const shapeTypes = ['circle', 'square', 'rectangle', 'oval', 'triangle'];
        const randomShapeType = utils.getRandomElementFromArray(shapeTypes);


        shape.classList.add(randomShapeType)
        shape.setAttribute('id', 'figure')
        const color = utils.getRandomColor()
        shape.style.background = color
        const size = utils.random(50, 500) // случайный размер от 50 до 500 пикселей

        // проверяем какая фигура и добавляем для нее стили
        if (randomShapeType === 'rectangle' || randomShapeType === 'oval') {
            const height = size
            const width = height + 200
            shape.style.maxWidth = width + 'px'
            shape.style.height = height + 'px'
        } else if (randomShapeType === 'triangle') {
            shape.style.width = '0'
            shape.style.height = '0'
            shape.style.background = 'transparent'
            shape.style.borderLeft = `${size}px solid transparent`
            shape.style.borderRight = `${size}px solid transparent`
            shape.style.borderTop = '0'
            shape.style.borderBottom = `${size + 50}px solid ${color}`
        } else {
            shape.style.maxWidth = size + 'px'
            shape.style.height = size + 'px'
        }

        const maxX = window.innerWidth - parseFloat(shape.style.width)
        const maxY = window.innerHeight - parseFloat(shape.style.height)
        const randomX = Math.random() * maxX
        const randomY = Math.random() * maxY

        shape.style.left = randomX + 'px'
        shape.style.top = randomY + 'px'

        document.body.style.position = 'relative'
        document.body.appendChild(shape)
    }
}