var express = require('express');
var router = express.Router();
var moment = require('moment');

var objectid = require('objectid')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// add router
router.get('/add', (req, res) => {res.status(200).render('add') });

router.get('/edit/:id', (req, res) =>{
  res.status(200).render('edit')
});
module.exports = router;
