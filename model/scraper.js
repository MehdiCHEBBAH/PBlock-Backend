const cheerio = require("cheerio");
const axios = require("axios");



var scrapeWebsite = async (siteUrl) => {
    const $ = await fetchData(siteUrl);
    return $('body').text();
  };


var fetchData = async siteUrl => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};



module.exports = scrapeWebsite;
