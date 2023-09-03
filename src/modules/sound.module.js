import { Module } from '../core/module'
const audioContext = require.context('../assets/sound', false)
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
        const audioPath = audioContext(`./sound_${intRandomNumber}.mp3`).default;

        const audio = new Audio(audioPath);
        audio.currentTime = 0;

        audio.play();
    }
}
