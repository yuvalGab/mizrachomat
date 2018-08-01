import * as words from '../data/words'

const options = {
  parsesNumber: 3,
  parseLinesNumber: 4
}

const generateParse = () => {
  let parse = ''
  for (const i = 0; i < options.parseLinesNumber; i++) {
    const sentence = generateSentence()
    parse += sentence + '\n'
  }

  return parse
}

const generateSentence = () => {
  let sentence = ''
  sentence += `${getRandomWord('nouns')} `
  sentence += `${getRandomWord('nouns')} `
  sentence += `${getRandomWord('adjectives')} `
  sentence += `${getRandomWord('conjunctions')} `
  sentence += `${getRandomWord('adjectives')} `

  return sentence
}

const getRandomWord = (type) => {
  const relevantWords = words[type]
  return relevantWords[Math.floor(Math.random() * relevantWords.length)]
}

const generateSong = () => {
  let song = ''
  const ditty = generateParse()
  for (const i = 0; i < options.parsesNumber; i++) {
    const parse = generateParse()
    song += parse + '\n' + ditty + '\n'
  }

  return song
} 

export default generateSong