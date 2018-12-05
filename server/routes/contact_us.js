var express = require('express');
var router = express.Router();
var con = require('./db');
const { sanitizeBody } = require('express-validator/filter');

router.get('/', function(req, res, next) 
{
 	res.json({'success':true,'msg':''});
});

router.post('/',function(req,res)
{
	console.log(req.body);
	sanitizeBody('*').trim().escape();
	var contact={};  
	contact.msg=req.body.msg;
	contact.name=req.body.name;
	console.log(contact);
	if((!req.body.email) && (!req.body.mobile))
	{
	  res.json({'success':false,'msg':'give contact details'});
	}
	else
	{
	  if(req.body.email)
	  {
	 	 req.checkBody('email', 'Invalid email').notEmpty().isEmail();
	 	 contact.email=req.body.email;
	  }
	  if(req.body.mobile)
	  {
	  	req.check('phone','invalid mobile').isLength({min:10,max:10});
	  	contact.mobile=req.body.mobile;
	  }
	  var verrs=req.validationErrors();
	  if(verrs)
	  {
	  	res.json({ success:false,msg: verrs[0].msg,});
	  }   
	  else 
	  {

		  var sql="Insert into contact_us SET ? ;";
		  con.query(sql,contact,function(err,result)
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
    }
     
});

module.exports = router;
