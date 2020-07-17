import shuffleArray from "./shuffleArray";
import getRandomInt from "./getRandomInt";
import hasRepeatingChar from "./hasRepeatingChar";

//this function does inplace manipulation of arr
//keep in mind when used
function shuffleCharacters(
  message: string[],
  leftIndex: number,
  rightIndex: number
): string | null {
  //guard condition for words with 2 or 3 chars
  if (leftIndex + 2 >= rightIndex) {
    return null;
  }

  let originalWord = message.slice(leftIndex, rightIndex + 1).join("");
  //guard condition for words with one repeating letter
  // ex: biiiiiiiiiiig
  if (hasRepeatingChar(originalWord, originalWord[1])) {
    return null;
  }

  let shuffledString = originalWord;
  //control for memory efficiency if desired
  let numberOfTimes = 99;

  while (originalWord === shuffledString && numberOfTimes > 0) {
    // Shuffle the input in place
    for (let i = leftIndex + 1; i < rightIndex; i++) {
      const randomIndex = getRandomInt(i, rightIndex);

      const char = message[i];
      const temp = message[randomIndex];

      message[i] = temp;
      message[randomIndex] = char;
    }

    shuffledString = message.slice(leftIndex, rightIndex + 1).join("");
    numberOfTimes--;
  }

  return originalWord;
}

function encode(string: string) {
  const message = string.split("");
  const encodedWords = [];

  // we do logic only on non word characters
  const regex = new RegExp(/\W/gi);

  //in order to shuffle we need the start and end index of each word
  let currentWordStart = 0;

  for (let i = 0; i < message.length; i++) {
    let char = string[i];

    if (regex.test(char)) {
      console.log(regex.test(char), char, i);
      let originalWord = shuffleCharacters(message, currentWordStart, i - 1);
      if (originalWord) {
        encodedWords.push(originalWord);
      }
      currentWordStart = i + 1;
    } else if (i === message.length - 1) {
      //we reach the end so the endIndex is the current index

      let originalWord = shuffleCharacters(message, currentWordStart, i);
      if (originalWord) {
        encodedWords.push(originalWord);
      }
    }
  }

  return {
    message: message.join(""),
    encodedWords: shuffleArray(encodedWords)
  };
}

export default encode;
