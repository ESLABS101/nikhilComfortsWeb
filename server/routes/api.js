var express = require('express');
var router = express.Router();

var contact_us = require('./contact_us');
router.use('/contact_us', contact_us);
var quote = require('./quote/quote.js');
router.use('/quote', quote);
var partner = require('./partner/partner');
router.use('/partner', partner);
var admin_login = require('./admin_login');
router.use('/login', admin_login);
var admin_logout = require('./admin_logout');
router.use('/logout', admin_logout);
var add_admin = require('./add_admin');
router.use('/add', add_admin);

var blog = require('./blog/blog.js');
router.use('/blog',blog);

var career = require('./career/career.js');
router.use('/career',career);

var equipment = require('./equipment/equipment.js');
router.use('/equipment',equipment);

var enquiry = require('./enquiry/enquiry.js');
router.use('/enquiry',enquiry);

// var casestudy = require('./casestudy/casestudy.js');
// router.use('/casestudy',casestudy);

module.exports = router;