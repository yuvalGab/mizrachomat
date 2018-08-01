import * as sentences from '../data/sentences'
import * as words from '../data/words'

const generateParse = parseLines => {
  let parse = ''
  const parseLinesNumber = parseLines || Math.floor(Math.random() * 3) + 3
  for (const i = 0; i < parseLinesNumber; i++) {
    const sentence = generateSentence()
    parse += sentence + '\n'
  }

  return parse
}

const generateSentence = type => {
  let sentence = ''
  const sentenceTypes = type || sentences.types[Math.floor(Math.random() * sentences.types.length)]
  sentenceTypes.forEach((type, i) => {
    sentence += getRandomWord(type)
    if (type !== 'conjunctionsNoSpace' && i !== sentenceTypes.length - 1) {
      sentence += ' '
    }
  })

  return sentence
}

const getRandomWord = type => {
  const relevantWords = words[type]
  return relevantWords[Math.floor(Math.random() * relevantWords.length)]
}

const generateSong = parses => {
  let song = ''
  const ditty = generateParse()
  const parsesNumber = parses || Math.floor(Math.random() * 3) + 2
  for (const i = 0; i < parsesNumber; i++) {
    const parse = generateParse()
    song += parse + '\n' + ditty + '\n'
  }

  return song
} 

export default generateSong