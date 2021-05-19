let express = require('express');
let router = express.Router();
let Random = require('../models/Random');

const RowMaxOfdbData = 10855;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//RandomStation - Index
router.get('/', (req, res) => {
      res.render('random/index');
    });
    
//RandomStation - Show One Station (If You Click The Button, You Will Get Information Of One Station From DB)
router.post('/', (req,res) => {
    let stationId = getRandomInt(RowMaxOfdbData + 1);
    Random.findOne({id:stationId}, function(err,random){
        if(err) return res.json(err);
        res.render('random/show',{random:random});
    });
});

module.exports = router;