
 export function getWordsMapArray(queryReseult){
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
  
