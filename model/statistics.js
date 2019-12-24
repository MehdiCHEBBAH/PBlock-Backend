// library to remove common words, details here : https://www.npmjs.com/package/stopword
const sw = require('stopword')
  
  function getWordsMapArray(queryReseult){
    var splitted = splitByWords(queryReseult);
    var wordMap = createWordMap(splitted);
    var sorted = sortByCount(wordMap);
    return sorted;
  }


  function splitByWords (text) {
    // split string by spaces (including spaces, tabs, and newlines)
    var wordsArray = text.split(/\s+/);
    return wordsArray;
  }

  function createWordMap (wordsArray) {

    // create map for word counts
    var wordsMap = {};
    /*
      wordsMap = {
        'Oh': 2,
        'Feelin': 1,
        ...
      }
    */
    wordsArray.forEach(function (key) {
      if (wordsMap.hasOwnProperty(key)) {
        wordsMap[key]++;
      } else {
        wordsMap[key] = 1;
      }
    });
  
    return wordsMap;
  
  }



  function sortByCount (wordsMap) {

    // sort by count in descending order
    var finalWordsArray = [];
    finalWordsArray = Object.keys(wordsMap).map(function (key) {
      return {
        name: key,
        total: wordsMap[key]
      };
    });
  
    finalWordsArray.sort(function (a, b) {
      return b.total - a.total;
    });
  
    return finalWordsArray;
  
  }
  
/**
 * cleans string from endlish usual words
 * @param queryResult : a string
 */
var cleanTheTextInput= (queryResult) =>{
  let arrayInput = queryResult.split(' ');
  let arrayResult = sw.removeStopwords(arrayInput);
  let stringResult = arrayResult.join(" ");
  return stringResult;
}


/**
 * cleans the input string and creates a map of word frequencies
 * @param textToAnalyse : should be the result of getSiteWeb() function  
 */
var calculateFrequency =(textToAnalyse)=> {
  let cleanedInput = cleanTheTextInput(textToAnalyse);
  let frequencyMapArray = getWordsMapArray(cleanedInput)
  return frequencyMapArray;
}


module.exports = calculateFrequency;