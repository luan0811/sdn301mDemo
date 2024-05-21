// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/form', function(req, res, next) {
  const formData = req.body;
  res.render('show', { data: formData });
});

module.exports = router;