const cheerio = require("cheerio");
const axios = require("axios");
// library to remove common words, details here : https://www.npmjs.com/package/stopword
const sw = require('stopword')

const getWordsMapArray = require("./helpers");

  const scrapeWebsite = async (siteUrl) => {
    const $ = await fetchData(siteUrl);
    return $('body').text();
  };

  module.exports = scrapeWebsite;

const fetchData = async siteUrl => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};


/**
 * cleans string from endlish usual words
 * @param queryResult : a string
 */
const cleanTheTextInput= (queryResult) =>{
  let arrayInput = queryResult.split(' ');
  let arrayResult = sw.removeStopwords(arrayInput);
  let stringResult = arrayResult.join(" ");
  return stringResult;
}


/**
 * cleans the input string and creates a map of word frequencies
 * @param textToAnalyse : should be the result of getSiteWeb() function  
 */
const calculateFrequency =(textToAnalyse)=> {
  let cleanedInput = cleanTheTextInput(textToAnalyse);
  let frequencyMapArray = getWordsMapArray(cleanedInput)
  return frequencyMapArray;
}

