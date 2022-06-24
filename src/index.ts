import generateJoke from './generateJoke'
import './styles/main.scss'
import laughing from './assets/laughing.svg'

const laughImg: HTMLImageElement = document.getElementById('laughImg') as HTMLImageElement
laughImg!.src = laughing

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn!.addEventListener('click', generateJoke)

console.log(generateJoke());