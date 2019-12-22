var express = require('express');
var url = require('url');
var dbService = require('../dbService/dbServices')

var router = express.Router();


/* GET web site status. */
router.get('/',async function(req, res, next) {
  var q = url.parse(req.url, true).query;

  let site = await dbService.getSiteFromDB(q.q);

  console.log(site);
  if(site.length == 0) {
    res.json({ host_name: q.q, 
               category:'nothing',
               probability:0 });
  }else{
    res.json({ host_name: site[0].host_name,
               category:site[0].category,
               probability:site[0].probability });
  }

});

module.exports = router;
