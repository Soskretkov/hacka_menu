import './shape-style.css'
import { Module } from '../core/module'
import { getRandomColor, random } from '../utils'
import { clearPreviousModuleEffects } from '../app-manager.js'

export class ShapeModule extends Module {
    constructor(labelText) {
        super('shapeModule', labelText || 'Create a figure')
    }

    trigger() {
        clearPreviousModuleEffects()
        this.#createRandomShape()
    }

    #createRandomShape = () => {
        const shape = document.createElement('div')
        const randomShape = this.#getRandomShapeType()
        shape.classList.add(randomShape)
        shape.setAttribute('id', 'figure')
        const color = getRandomColor()
        shape.style.background = color
        const size = random(50, 500) // случайный размер от 50 до 500 пикселей

        // проверяем какая фигура и добавляем для нее стили
        if (randomShape === 'rectangle' || randomShape === 'oval') {
            const height = size
            const width = height + 200
            shape.style.maxWidth = width + 'px'
            shape.style.height = height + 'px'
        } else if (randomShape === 'triangle') {
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

    #getRandomShapeType = () => {
        const shapes = ['circle', 'square', 'rectangle', 'oval', 'triangle'];
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        return randomShape
    }
}