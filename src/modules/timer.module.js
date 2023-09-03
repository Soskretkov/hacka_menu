import './timer-module.css'
import { Module } from '../core/module'
import { clearPreviousModuleEffects } from '../app-manager.js'
const appManager = { clearPreviousModuleEffects }
import { getRandomElementFromArray } from '../utils'
const utils = { getRandomElementFromArray }

const COLORS_ARRAY = ['#F0FFF0', '#F5FFFA', '#F0FFFF', '#F0F8FF', '#FFF5EE', '#F8F8FF', '#F5F5F5', '#F5F5DC', '#FDF5E6', '#FFFAF0']

export class TimerModule extends Module {
    constructor(labelText) {
        super('quoteModule', labelText || 'Timer')
    }

    trigger() {
        appManager.clearPreviousModuleEffects()

        let numTime = Number(prompt('Задайте время в секундах для таймера'))

        if (isNaN(numTime) || numTime <= 0) {
            numTime = Number(prompt('Введите целое число больше 0'))
        }

        let audio = new Audio()
        audio.preload = 'auto'
        audio.src = '../assets/sound/sound.mp3'

        // Добавляем обработчики ошибок
        audio.onerror = function () {
            alert('Ошибка при загрузке аудиофайла');
            return;
        };

        const $timer = document.createElement('h1')
        $timer.id = 'time'

        document.body.append($timer)

        // this.#setTime(numTime, $timer, audio)
        audio.play()
    }


    #setTime = (intInterval, $element, audio) => {
        $element.innerHTML = `Осталось ${intInterval} сек.`
        setInterval(() => {
            if (intInterval > 0) {
                document.getElementById("time").style.backgroundColor = utils.getRandomElementFromArray(COLORS_ARRAY)
                document.body.style.backgroundColor = utils.getRandomElementFromArray(COLORS_ARRAY)
                --intInterval
                $element.innerHTML = `Осталось ${intInterval} сек.`
                console.log(intInterval)
            } else {
                // воспроизводится звук
                audio.play()

                // Оповещаем об ошибке воспроизведения
                audio.onerror = function () {
                    alert('Ошибка при загрузке аудиофайла');
                };

                alert('Таймер закончен')
                document.querySelector('#time').remove()
                clearInterval(1)
            }
        }, 1000);
    }
}