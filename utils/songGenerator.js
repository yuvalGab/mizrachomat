import * as sentences from '../data/sentences'
import * as words from '../data/words'

const getRandomItem = array => {
  return array[Math.floor(Math.random() * array.length)]
}

const generateParse = number => {
  let parse = ''
  const parseLinesNumber = number || Math.floor(Math.random() * 3) + 3
  for (const i = 0; i < parseLinesNumber; i++) {
    const sentence = generateSentence()
    parse += sentence + '\n'
  }

  return parse
}

const generateSentence = pattern => {
  let sentence = ''
  const sentencePattern = pattern || getRandomItem(sentences.parseSentencePatterns)
  sentencePattern.forEach((type, i) => {
    sentence += getRandomWord(type)
    if (type !== 'conjunctionsNoSpace' && i !== (sentencePattern.length - 1)) {
      sentence += ' '
    }
  })

  return sentence
}

const getRandomWord = type => {
  const relevantWords = words[type]
  return relevantWords[Math.floor(Math.random() * relevantWords.length)]
}

export const generateLabel = pattern => {
  const sentencePattern = pattern || getRandomItem(sentences.labelSentencePatterns)
  return generateSentence(sentencePattern)
}

export const generateAuthor = name => {
  const baseName = name || getRandomItem(words.authors)
  return `מאת: ${baseName} המלאך`
}

export const generateSong = number => {
  let song = ''
  const ditty = generateParse()
  const parsesNumber = number || Math.floor(Math.random() * 3) + 2
  for (const i = 0; i < parsesNumber; i++) {
    const parse = generateParse()
    song += parse + '\n' + ditty + '\n'
  }

  return song
}