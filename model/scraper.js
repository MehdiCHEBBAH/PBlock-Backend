const cheerio = require("cheerio");
const axios = require("axios");

const fetchData = async (siteUrl) => {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
  };

  const scrapeWebsite = async (siteUrl) => {
    const $ = await fetchData(siteUrl);
    return $('body').text();
  };

  module.exports = scrapeWebsite;