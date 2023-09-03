import './timer-module.css'
import { Module } from '../core/module'
import { clearPreviousModuleEffects, setInitialAppSettings } from '../app-manager.js'
const appManager = { clearPreviousModuleEffects, setInitialAppSettings }
import { getRandomElementFromArray } from '../utils'
const utils = { getRandomElementFromArray }
import audioSrc from '../assets/sound/sound.mp3'

const COLORS_ARRAY = ['#F0FFF0', '#F5FFFA', '#F0FFFF', '#F0F8FF', '#FFF5EE', '#F8F8FF', '#F5F5F5', '#F5F5DC', '#FDF5E6', '#FFFAF0']

export class TimerModule extends Module {
    constructor(labelText) {
        super('quoteModule', labelText || 'Timer')
    }


    trigger() {
        appManager.clearPreviousModuleEffects()

        const numTime = this.#getUserInputAsNumber()
        const $timer = this.#createAndSetupTimerInBody()

        const audio = new Audio(audioSrc)

        this.#setTime(numTime, $timer, audio)
    }


    #getUserInputAsNumber = () => {
        let num = Number(prompt('Задайте время в секундах для таймера'))

        if (isNaN(num) || num <= 0) {
            num = Number(prompt('Введите целое число больше 0'))
        }

        return num
    }


    #createAndSetupTimerInBody = () => {
        const $timer = document.createElement('h1')
        $timer.id = 'time'

        document.body.append($timer)
        document.body.style.backgroundColor = utils.getRandomElementFromArray(COLORS_ARRAY)
        return $timer
    }


    #setTime = (intInterval, $element, audio) => {
        $element.innerHTML = `Осталось ${intInterval} сек.`
        const intervalId = setInterval(() => {
            if (intInterval > 0) {
                document.getElementById("time").style.backgroundColor = utils.getRandomElementFromArray(COLORS_ARRAY)
                document.body.style.backgroundColor = utils.getRandomElementFromArray(COLORS_ARRAY)
                --intInterval
                $element.innerHTML = `Осталось ${intInterval} сек.`
            } else {
                // воспроизводится звук
                audio.play()
                alert('Таймер закончен')

                document.querySelector('#time').remove()
                clearInterval(intervalId)
                appManager.setInitialAppSettings()
            }
        }, 1000);
    }
}