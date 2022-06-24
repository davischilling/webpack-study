import axios from 'axios'

const generateJoke = (): void => {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }

  axios.get('https://icanhazdadjoke.com', config).then(res => {
    const jokeText = document.getElementById('joke')
    if (jokeText){
      jokeText.innerHTML = res.data.joke.toString()
    }
  })
}

export default generateJoke