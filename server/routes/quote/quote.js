var express = require('express');
var router = express.Router();

var add=require('./addquote');
router.use('/add', add);

var view=require('./viewquote');
router.use('/view', view);

// var update=require('./updatequote');
// router.use('/update', update);

// var del=require('./deletequote');
// router.use('/delete', del);

module.exports=router;