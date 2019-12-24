var express = require('express');
var url = require('url');
var dbService = require('../dbService/dbServices')

var scrapeWebsite = require('../model/scraper');
var calculateFrequency = require('../model/helpers')
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
  var a = "https://www.linguee.fr/anglais-francais/traduction/purpose.html"
  var q = url.parse(req.url, true).query;
  var site = await scrapeWebsite(a);
  //console.log(site);
  res.json({'frequencies':calculateFrequency(site)});
});

module.exports = router;
