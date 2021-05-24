'use strict'
let express = require('express');
let router = express.Router();
let Random = require('../models/Random');

const maxLengthOfDB = 10855;

//RandomStation - Index
router.get('/', (req, res) => {
  res.render('random/index');
});

//RandomStation - Show One Station (If You Click The Button, You Will Get Information Of One Station From DB)
router.post('/', (req, res) => {
  //get => req.query['name'] , post(body-parser) => req.body['name']  
  let todohuken = req.body['todohuken-list'];
  //get row count from data
  if (todohuken == undefined) {
    
    Random.findOne({ id: getRandomInt(maxLengthOfDB) + 1 }, (err, random) => {
      if (err) return res.json(err);
      res.render('random/show', { random: random });
    });
  }
  else {
    getRowCount(todohuken).then((maxLengthOfData) => {
      Random.find({pref_cd:todohuken}, (err, randoms) => {
        if (err) return res.json(err);
        let random = randoms[getRandomInt(maxLengthOfData + 1)];
        res.render('random/show', { random: random });
      });
    });
  }
});

/*** Functions ***/
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};

function getRowCount(todohuken) {
  return Random.countDocuments({ pref_cd: todohuken });
};

module.exports = router;