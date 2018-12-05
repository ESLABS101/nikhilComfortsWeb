var express = require('express');
var router = express.Router();
var con = require('./db');
const { sanitizeBody } = require('express-validator/filter');

// router.get('/', function(req, res, next) 
// {
//  	res.json({'success':true,'msg':''});
// });

router.post('/',function(req,res)
{
	console.log(req.body);
	sanitizeBody('*').trim().escape();
	var quote={};  
	quote.description=req.body.description;
	req.checkBody('email', 'Invalid email').notEmpty().isEmail();
	quote.email=req.body.email;
	var verrs=req.validationErrors();
	if(verrs)
	{
		res.json({ success:false,msg: verrs[0].msg,});
	}   
	else 
	{
	  var sql="Insert into quote SET ? ;";
	  con.query(sql,quote,function(err,result)
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
