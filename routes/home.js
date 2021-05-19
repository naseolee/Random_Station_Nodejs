let express = require('express');
let router = express.Router();


router.get('/',(req,res) => {
    res.redirect('/random');
});

module.exports = router;