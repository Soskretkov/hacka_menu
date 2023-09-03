import './shape-module.css'
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

        const shape = this.#createRandomShape()
        this.#setShapeStyle(shape)
        this.#setPosition(shape)
        this.#updateDOM(shape)
    }


    #createRandomShape = () => {
        const SHAPE_TYPES = ['circle', 'square', 'rectangle', 'oval', 'triangle'];
        const strRandomShapeType = utils.getRandomElementFromArray(SHAPE_TYPES);
        const $randomShape = this.#createShapeElement(strRandomShapeType)

        return {
            type: strRandomShapeType,
            domElement: $randomShape,
        }
    }


    #createShapeElement = (strShapeType) => {
        const $ = document.createElement('div')

        $.classList.add(strShapeType)
        $.setAttribute('id', 'figure')
        return $
    }


    #setPosition = (shape) => {
        const $element = shape.domElement
        const maxX = window.innerWidth - parseFloat($element.style.width)
        const maxY = window.innerHeight - parseFloat($element.style.height)
        const randomX = Math.random() * maxX
        const randomY = Math.random() * maxY

        $element.style.left = randomX + 'px'
        $element.style.top = randomY + 'px'
    }


    // проверяет какая фигура и добавляет для нее стили
    #setShapeStyle = (shape) => {
        const INT_RECTANGLE_EXTRA_WIDTH = 200        
        const $element = shape.domElement
        const intSize = utils.random(50, 500) // случайное целое число, выражающее размер от 50 до 500 пикселей
        const strColor = utils.getRandomColor()

        $element.style.background = strColor

        switch (shape.type) {
            case 'rectangle':
            case 'oval':

                const height = intSize
                const width = height + INT_RECTANGLE_EXTRA_WIDTH
                $element.style.maxWidth = width + 'px'
                $element.style.height = height + 'px'
                break
            case 'triangle':
                $element.style.width = '0'
                $element.style.height = '0'
                $element.style.background = 'transparent'
                $element.style.borderLeft = `${intSize}px solid transparent`
                $element.style.borderRight = `${intSize}px solid transparent`
                $element.style.borderTop = '0'
                $element.style.borderBottom = `${intSize + 50}px solid ${strColor}`
                break
            default:
                $element.style.maxWidth = intSize + 'px'
                $element.style.height = intSize + 'px'
        }
    }


    #updateDOM(shape) {
        document.body.style.position = 'relative';
        document.body.appendChild(shape.domElement);
    }
}