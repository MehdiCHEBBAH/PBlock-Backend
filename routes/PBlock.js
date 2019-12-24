var express = require('express');
var url = require('url');
var {scrapeWebsite, calculateFrequency} = require('../model/scraper');
var dbService = require('../dbService/dbServices')

var router = express.Router();


/* GET web site status. */
router.get('/',async function(req, res, next) {
  var q = url.parse(req.url, true).query;

  let site = await dbService.getSiteFromDB(q.q);

  if(site.length == 0) {
    res.json({ host_name: q.q, 
               category:'no',
               probability:0 });
  }else{
    res.json({ host_name: site[0].host_name,
               category:site[0].category,
               probability:site[0].probability });
  }

});

// For testing purpos only
router.get('/test/',async function(req, res, next) {
  var q = url.parse(req.url, true).query;
  var site = await scrapeWebsite("https://webscraper.io/tehttps://webscraper.io/test-sites/e-commerce/allinone-popup-linksst-sites");
  //console.log(site);
  res.json({'site':site,
    'frequencies':calculateFrequency(site)});
});

module.exports = router;
