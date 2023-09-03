import './weather-module.css'
import { Module } from '../core/module'
import { clearPreviousModuleEffects } from '../app-manager.js'
const appManager = { clearPreviousModuleEffects }

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
const keyApi = '6666564d754e06bace9e7cce885329f9'

export class WeatherModule extends Module {
    constructor(labelText) {
        super('WeatherModule', labelText || 'Check the weather')
    }

    trigger() {
        appManager.clearPreviousModuleEffects()

        const section = this.#createWeatherSection()
        this.#populateWeatherSection(section)
        this.#fetchAndRenderWeather()
    }

    #createWeatherSection = () => {
        const $weatherSection = document.createElement('section')
        $weatherSection.className = 'weather'
        document.body.appendChild($weatherSection)
        return $weatherSection
    } 

    #populateWeatherSection = (section) => {
        // Создаем блок для ввода города
        const $inputContainer = document.createElement('div')
        $inputContainer.className = 'inputs'
        
        const $cityInputElement = document.createElement('input')
        $cityInputElement.setAttribute('id', 'city-input')
        $cityInputElement.type = 'text'
        $cityInputElement.placeholder = 'Укажите любой город...'

        const $addInputElement = document.createElement('input')
        $addInputElement.setAttribute('id', 'add-submit')
        $addInputElement.value = 'Узнать'
        $addInputElement.type = 'submit'

        // Создаем блок для вывода информации о погоде
        const $infoBlock = document.createElement('div')
        $infoBlock.className = 'info'

        const $cityNameElement = document.createElement('h2')
        $cityNameElement.setAttribute('id', 'city-name')

        const $descriptionElement = document.createElement('p')
        $descriptionElement.setAttribute('id', 'city-description')

        const $temperatureElement = document.createElement('p')
        $temperatureElement.setAttribute('id', 'city-temperature')

        const $windSpeedElement = document.createElement('p')
        $windSpeedElement.setAttribute('id', 'city-wind')

        section.append($inputContainer, $infoBlock)
        $inputContainer.append($cityInputElement, $addInputElement)
        $infoBlock.append($cityNameElement, $descriptionElement, $temperatureElement, $windSpeedElement)
    }

    #fetchAndRenderWeather =  () => {
        const inputval = document.querySelector('#city-input')
        const btn = document.querySelector('#add-submit');
        const city = document.querySelector('#city-name')
        const description = document.querySelector('#city-description')
        const temp = document.querySelector('#city-temperature')
        const wind = document.querySelector('#city-wind')

        btn.addEventListener('click', () => {
            fetch(`${WEATHER_URL}${inputval.value}&appid=${keyApi}&lang=ru`)
            .then(res => res.json())
            .then(data => 
                {
                  const nameval = data['name']
                  const descrip = data['weather']['0']['description']
                  const tempature = data['main']['temp']
                  const windSpeed = data['wind']['speed']

                  city.innerHTML=`Погода <span>${nameval}<span>`
                  temp.innerHTML = `Температура: <span>${(tempature - 273).toFixed(2)} C</span>`
                  description.innerHTML = `Небесные условия: <span>${descrip}<span>`
                  wind.innerHTML = `Скорость ветра: <span>${windSpeed} km/h<span>`
              
                })
            .catch(err => alert('Вы ввели неправильное название города'))
        })
    }
}