import './quote-module.css'
import { Module } from '../core/module'
import { clearPreviousModuleEffects } from '../app-manager.js'
const appManager = { clearPreviousModuleEffects }
import { getRandomElementFromArray } from '../utils'
const utils = { getRandomElementFromArray }


const QUOTES = [
    {
        text: "Что разум человека может постигнуть и во что он может поверить, того он способен достичь.",
        author: "Наполеон Хилл, журналист и писатель",
    },
    {
        text: "Стремитесь не к успеху, а к ценностям, которые он дает.",
        author: "Альберт Эйнштейн",
    },
    {
        text: "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.",
        author: "Флоренс Найтингейл",
    },
    {
        text: "За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха.",
        author: "Майкл Джордан",
    },
    {
        text: "Сложнее всего начать действовать, все остальное зависит только от упорства.",
        author: "Амелия Эрхарт",
    },
    {
        text: "Надо любить жизнь больше, чем смысл жизни.",
        author: "Федор Достоевский",
    },
    {
        text: "Жизнь - это то, что с тобой происходит, пока ты строишь планы.",
        author: "Джон Леннон",
    },
    {
        text: "Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно.",
        author: "Альберт Эйнштейн",
    },
    {
        text: "Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали. Так отчальте от тихой пристани. Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте!",
        author: "Марк Твен",
    },
    {
        text: "Начинать всегда стоит с того, что сеет сомнения.",
        author: "Борис Стругацкий",
    },
]


export class QuoteModule extends Module {
    constructor(labelText) {
        super('quoteModule', labelText || 'Random quote')
    }

    trigger() {
        appManager.clearPreviousModuleEffects()

        this.#createQuoteContainer()

        const quoteHandler = this.#createQuoteHandler()
        quoteHandler()
        setInterval(quoteHandler, 6000)
    }

    #createQuoteHandler = () => {
        const $quoteContainer = document.querySelector('.quote-container');
        const $author = document.getElementById("quoteAuthor")
        const $quoteText = document.getElementById("quoteText")
        const colorsArray = ['#F0FFF0', '#F5FFFA', '#F0FFFF', '#F0F8FF', '#FFF5EE', '#F8F8FF', '#F5F5F5', '#F5F5DC', '#FDF5E6', '#FFFAF0']

        return () => {
            const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)]
            $quoteText.innerHTML = quote.text
            $author.innerHTML = `- ${quote.author}`

            const strColor = utils.getRandomElementFromArray(colorsArray)
            $quoteContainer.style.backgroundColor = strColor
        }
    }

    #createQuoteContainer = () => {
        const $containerBlock = document.createElement('div')
        $containerBlock.className = 'container'

        const $quoteContainer = document.createElement('div')
        $quoteContainer.className = 'quote-container'
        $quoteContainer.id = 'quoteContainer'

        const $blockH1 = document.createElement('h1')
        $blockH1.textContent = 'Цитата дня'
        const $quoteText = document.createElement('div')
        $quoteText.className = 'quote-text'
        $quoteText.id = 'quoteText'

        const $quoteAuthor = document.createElement('div')
        $quoteAuthor.className = 'quote-author'
        $quoteAuthor.id = 'quoteAuthor'

        $quoteContainer.append($blockH1, $quoteText, $quoteAuthor)
        $containerBlock.append($quoteContainer)
        document.body.append($containerBlock)        
    }
}