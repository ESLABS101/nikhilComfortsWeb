var express = require('express');
var router = express.Router();
// var func = require('../func.js');
// var edo=require('../edonomix.js');
var con = require('../db');

const { sanitizeBody } = require('express-validator/filter');

// router.get('/', function(req, res, next) 
// {
//  	res.json({'success':true,'msg':''});
// });


router.post('/',function(req,res)
{
	console.log(req.body);
	sanitizeBody('*').trim().escape();
	var partner={};  
	req.checkBody('email', 'Invalid Email').notEmpty().isEmail();
	req.check('first_name','Invalid First Name').isLength({min:2,max:100});
	req.check('last_name','Invalid Last Name').isLength({min:2,max:100});
	req.check('contact_number','Invalid Contact Number').isLength({min:10,max:10});

	var verrs=req.validationErrors();
	if(verrs)
	{
		res.json({ success:false,msg: verrs[0].msg,});
	}   
	else 
	{
		partner.email=req.body.email;
		partner.first_name=req.body.first_name;
		partner.last_name=req.body.last_name;
		partner.contact_number=req.body.contact_number;
		partner.subject=req.body.subject;	
	  var sql="Insert into partner SET ? ;";
	  con.query(sql,partner,function(err,result)
	  {
		  if(err)
		  {
			  console.log(sql,err);
			  res.json({success:false,msg: 'something went wrong',});
	      }
	      else
	      {
	     	 res.json({ success:true,msg: 'succesful entry', });
	      }
	  });

	}  
});

module.exports = router;
