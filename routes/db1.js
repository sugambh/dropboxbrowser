var querystring = require('querystring');
var http = require('http');
var request = require('request');

exports.list = function(req, res){	
	user_session=req.session;


	
var access_token;

request({
    url: 'https://api.dropbox.com/1/oauth2/token', //URL to hit
    method: 'POST',
    //Lets post the following key/values as form
    form: {
        code: req.query.code, 
        grant_type: 'authorization_code',
        client_id:'',
        client_secret:'',
        redirect_uri:'http://127.0.0.1:3000/db1'
    }
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        
    access_token=JSON.parse(body).access_token;
    console.log('access_token from response '+access_token);
    
    user_session.access_token=access_token;
    console.log("access_token stored in user_session"+user_session.access_token);
    res.render('main');


    }
});
	 
	 


































	 };