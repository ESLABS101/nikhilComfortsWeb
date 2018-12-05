var express = require('express');
var router = express.Router();

var add=require('./addpartner');
router.use('/add', add);

var view=require('./viewpartner');
router.use('/view', view);

// var update=require('./updatepartner');
// router.use('/update', update);

// var del=require('./deletepartner');
// router.use('/delete', del);

module.exports=router;