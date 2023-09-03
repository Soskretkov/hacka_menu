import { Module } from '../core/module'
import { random } from '../utils'
const utils = { random }

export class SoundModule extends Module {
    constructor(labelText) {
        super('soundModule', labelText || 'Play a random sound')
    }

    trigger() {
        this.playRandomSound();
    }

    playRandomSound() {
        const NUMBER_OF_VARIANTS = 10
        const intRandomNumber = utils.random(1, NUMBER_OF_VARIANTS);
        const audioPath = `../assets/sound/sound_${intRandomNumber}.mp3`;

        // Отладочные выводы
        console.log("random number:", intRandomNumber);
        console.log("path:", audioPath);

        const audio = new Audio(audioPath);
        audio.currentTime = 0;

        audio.play();
    }
}
